package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.DTO.AddPaymentModeDTO;
import com.pagibighousing.demo.Entity.PaymentMode;
import com.pagibighousing.demo.Repository.PaymentModeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

@Service
public class PaymentModeService {

    @Autowired
    private PaymentModeRepository paymentModeRepository;

    @Transactional
    public String addPaymentMode(AddPaymentModeDTO request){
        PaymentMode paymentMode = new PaymentMode();

        paymentMode.setModeId(request.getModeId());
        paymentMode.setPaymentModeDescription(request.getPaymentModeDescription());
        paymentModeRepository.save(paymentMode);

        return "Payment Mode Added Successfully";

    }
}
