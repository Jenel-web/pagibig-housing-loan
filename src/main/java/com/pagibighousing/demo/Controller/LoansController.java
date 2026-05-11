package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.Service.LoansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loans")
public class LoansController {

    @Autowired
    private LoansService loansService;
}
