package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.Service.LoanRecordsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loanrecords")
@CrossOrigin(origins = "http://localhost:5173")
public class LoanRecordsController {

    @Autowired
    private LoanRecordsService loanRecordsService;


}
