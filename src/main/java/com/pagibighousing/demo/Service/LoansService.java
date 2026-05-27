package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.DTO.AddLoansRequestDTO;
import com.pagibighousing.demo.DTO.AddPurposeDTO;
import com.pagibighousing.demo.DTO.GetLoansResponse;
import com.pagibighousing.demo.Entity.*;
import com.pagibighousing.demo.Repository.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class LoansService {

    @Autowired private LoansRepository loansRepository;
    @Autowired private LoanRecordsRepository loanRecordsRepository;
    @Autowired private UsersRepository usersRepository;
    @Autowired private PropertyRepository propertyRepository;
    @Autowired private PurposeRepository purposeRepository;
    @Autowired private PaymentModeRepository paymentModeRepository;

    @Transactional
    public String createLoan(AddLoansRequestDTO request){

        Users user = usersRepository.findById(request.getPagIbigRtn())
                .orElseThrow(() -> new RuntimeException("User not found."));
        Property property = propertyRepository.findByPropertyId(request.getPropertyId())
                .orElseThrow(() -> new RuntimeException("Property record not found."));

        Purpose purpose = purposeRepository.findById(request.getPurposeId())
                .orElseThrow(() -> new RuntimeException("Loan purpose option not found."));

        PaymentMode paymentMode = paymentModeRepository.findById(request.getModeId())
                .orElseThrow(() -> new RuntimeException("Payment method not found."));

        Loans loan = new Loans();
        // load id will be generated, no system, just randomized
        String generatedLoanId = "LN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        loan.setUser(user);
        loan.setLoanId(generatedLoanId);
        loan.setPurpose(purpose);
        loan.setPaymentMode(paymentMode);
        loan.setDesiredLoanAmount(request.getDesiredLoanAmount());
        loan.setDesiredLoanTerm(request.getDesiredLoanTerm());
        loan.setDownpaymentAmount(request.getDownpaymentAmount());

        //calculates the installment
        double principal = request.getDesiredLoanAmount() - request.getDownpaymentAmount();
        double baseInstallment = principal / request.getDesiredLoanTerm(); //always expressed in months
        loan.setInstallmentAmount(baseInstallment);

        // Commit core loan record
        Loans savedLoan = loansRepository.save(loan);

        //saved the load record since it has a composite key
        LoanRecordId recordId = new LoanRecordId(savedLoan.getLoanId(), property.getPropertyId());

        LoanRecords loanRecord = new LoanRecords();
        loanRecord.setId(recordId);
        loanRecord.setLoan(savedLoan);
        loanRecord.setProperty(property);
        loanRecord.setCollateralValue(request.getCollateralValue());
        //adds in the loan record

        loanRecordsRepository.save(loanRecord);

        return "Loan saved Successfully";
    }

    //gets all the loan details in a list to be displayed in the frontend.
    public List<GetLoansResponse> getLoansByUserId(String pagIbigRtn) {
       //gets all the details of each loans by the user.
        List<LoanRecords> records = loanRecordsRepository.findAllDetailsByPagIbigRtn(pagIbigRtn);
        List<GetLoansResponse> responseList = new ArrayList<>(); // list that will be displayed


        for (LoanRecords record : records) {
            Loans loan = record.getLoan();
            Property property = record.getProperty();

            GetLoansResponse dto = new GetLoansResponse(
                    loan.getLoanId(),
                    loan.getDesiredLoanAmount(),
                    loan.getDesiredLoanTerm(),
                    loan.getDownpaymentAmount(),
                    loan.getInstallmentAmount(),
                    loan.getPaymentMode().getPaymentModeDescription(),
                    loan.getPurpose().getPurpose_description(),
                    property.getPropertyId(),
                    property.getPropertyLocation(),
                    record.getCollateralValue()
            );

            responseList.add(dto);
        }

        return responseList;
    }
}
