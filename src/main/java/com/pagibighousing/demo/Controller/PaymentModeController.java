package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.Service.PaymentModeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
public class PaymentModeController {

    @Autowired
    private PaymentModeService paymentModeService;
}
