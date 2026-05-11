package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.Repository.LoansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoansService {

    @Autowired
    private LoansRepository loansRepository;
}
