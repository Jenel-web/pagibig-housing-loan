package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.Repository.PaymentModeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentModeService {

    @Autowired
    private PaymentModeRepository paymentModeRepository;
}
