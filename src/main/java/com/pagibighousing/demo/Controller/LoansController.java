package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.DTO.AddLoansRequestDTO;
import com.pagibighousing.demo.DTO.AddPurposeDTO;
import com.pagibighousing.demo.Service.LoansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loans")
public class LoansController {

    @Autowired
    private LoansService loansService;

    @PostMapping("/createLoan")
    public ResponseEntity<String> createLoan(@RequestBody AddLoansRequestDTO request){
        String result = loansService.createLoan(request);

        if(!result.isEmpty()){
            return  ResponseEntity.ok(result);
        }
        return ResponseEntity.ok("Loan creation unsuccessful");
    }

}
