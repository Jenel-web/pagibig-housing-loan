package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.DTO.AddPaymentModeDTO;
import com.pagibighousing.demo.DTO.PaymentModeDTO;
import com.pagibighousing.demo.Service.PaymentModeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentModeController {

    @Autowired
    private PaymentModeService paymentModeService;

    // CREATE → POST /payment
    @PostMapping("/add")
    public ResponseEntity<PaymentModeDTO> createPaymentMode(@RequestBody PaymentModeDTO dto) {
        return ResponseEntity.ok(paymentModeService.createPaymentMode(dto));
    }

    // READ ALL → GET /payment
    @GetMapping("/get")
    public ResponseEntity<List<PaymentModeDTO>> getAllPaymentModes() {
        return ResponseEntity.ok(paymentModeService.getAllPaymentModes());
    }

    // READ ONE → GET /payment/{modeId}
    @GetMapping("/{modeId}")
    public ResponseEntity<PaymentModeDTO> getPaymentModeById(@PathVariable String modeId) {
        return ResponseEntity.ok(paymentModeService.getPaymentModeById(modeId));
    }

    // UPDATE → PUT /payment/{modeId}
    @PutMapping("/{modeId}")
    public ResponseEntity<PaymentModeDTO> updatePaymentMode(
            @PathVariable String modeId,
            @RequestBody PaymentModeDTO dto) {
        return ResponseEntity.ok(paymentModeService.updatePaymentMode(modeId, dto));
    }

    // DELETE → DELETE /payment/{modeId}
    @DeleteMapping("/{modeId}")
    public ResponseEntity<String> deletePaymentMode(@PathVariable String modeId) {
        return ResponseEntity.ok(paymentModeService.deletePaymentMode(modeId));
    }
}