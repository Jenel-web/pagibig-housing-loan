package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.DTO.AddLoansRequestDTO;
import com.pagibighousing.demo.DTO.AddPurposeDTO;
import com.pagibighousing.demo.DTO.GetLoansResponse;
import com.pagibighousing.demo.Entity.Loans;
import com.pagibighousing.demo.Service.LoansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loans")
@CrossOrigin(origins = "http://localhost:5173")
public class LoansController {

    @Autowired
    private LoansService loansService;

    @PostMapping("/createLoan")
    public ResponseEntity<?> createLoan(@RequestBody AddLoansRequestDTO request){
        try {
            Loans result = loansService.createLoan(request);
            return ResponseEntity.ok("Loan successfully created with ID: " + result.getLoanId() +
                    " | Monthly Base Installment: PHP " + result.getInstallmentAmount());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to process loan application: " + e.getMessage());
        }
    }

    @GetMapping("/get")
    public ResponseEntity<List<GetLoansResponse>> getLoans(@RequestBody String userId){
        List<GetLoansResponse> loansList = loansService.getLoansByUserId(userId);

        return ResponseEntity.ok(loansList);
    }




}
