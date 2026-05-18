package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.DTO.AddPaymentModeDTO;
import com.pagibighousing.demo.Service.PaymentModeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
public class PaymentModeController {

    @Autowired
    private PaymentModeService paymentModeService;

    @PostMapping("/add")
    public ResponseEntity<String> addPaymentMode(@RequestBody AddPaymentModeDTO request){
        String result = paymentModeService.addPaymentMode(request);

        return ResponseEntity.ok(result);
    }

}
