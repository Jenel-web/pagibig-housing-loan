package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.DTO.AddLoansRequestDTO;
import com.pagibighousing.demo.DTO.AddPurposeDTO;
import com.pagibighousing.demo.Entity.*;
import com.pagibighousing.demo.Repository.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        Property property = propertyRepository.findByPropertyId(request.getPropertyId())
                .orElseThrow(() -> new RuntimeException("Property record not found."));

        Purpose purpose = purposeRepository.findById(request.getPurposeId())
                .orElseThrow(() -> new RuntimeException("Loan purpose option not found."));

        PaymentMode paymentMode = paymentModeRepository.findById(request.getModeId())
                .orElseThrow(() -> new RuntimeException("Payment method not found."));

        Loans loan = new Loans();
        // load id will be generated, no system, just randomized
        String generatedLoanId = "LN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
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
}
