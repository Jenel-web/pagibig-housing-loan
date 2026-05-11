package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.Repository.LoanRecordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanRecordsService {

    @Autowired
    private LoanRecordsRepository loanRecordsRepository;
}
