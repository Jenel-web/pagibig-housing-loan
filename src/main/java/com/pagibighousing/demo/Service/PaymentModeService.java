package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.DTO.PaymentModeDTO;
import com.pagibighousing.demo.Entity.PaymentMode;
import com.pagibighousing.demo.Repository.PaymentModeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaymentModeService {

    @Autowired
    private PaymentModeRepository paymentModeRepository;

    // ── Helpers: convert between Entity ↔ DTO ──────────────────────────────

    private PaymentModeDTO toDTO(PaymentMode entity) {
        PaymentModeDTO dto = new PaymentModeDTO();
        dto.setModeId(entity.getModeId());
        dto.setPaymentModeDescription(entity.getPaymentModeDescription());
        return dto;
    }

    private PaymentMode toEntity(PaymentModeDTO dto) {
        PaymentMode entity = new PaymentMode();
        entity.setModeId(dto.getModeId().toUpperCase()); // e.g. "sad" → "SAD"
        entity.setPaymentModeDescription(dto.getPaymentModeDescription());
        return entity;
    }

    // ── CRUD ───────────────────────────────────────────────────────────────

    // CREATE
    public PaymentModeDTO createPaymentMode(PaymentModeDTO dto) {
        if (paymentModeRepository.existsById(dto.getModeId().toUpperCase())) {
            throw new RuntimeException("Payment mode ID already exists: " + dto.getModeId());
        }
        PaymentMode saved = paymentModeRepository.save(toEntity(dto));
        return toDTO(saved);
    }

    // READ ALL
    public List<PaymentModeDTO> getAllPaymentModes() {
        return paymentModeRepository.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    // READ ONE
    public PaymentModeDTO getPaymentModeById(String modeId) {
        PaymentMode entity = paymentModeRepository.findById(modeId.toUpperCase())
                .orElseThrow(() -> new RuntimeException("Payment mode not found: " + modeId));
        return toDTO(entity);
    }

    // UPDATE
    public PaymentModeDTO updatePaymentMode(String modeId, PaymentModeDTO dto) {
        PaymentMode existing = paymentModeRepository.findById(modeId.toUpperCase())
                .orElseThrow(() -> new RuntimeException("Payment mode not found: " + modeId));
        existing.setPaymentModeDescription(dto.getPaymentModeDescription());
        return toDTO(paymentModeRepository.save(existing));
    }

    // DELETE
    public String deletePaymentMode(String modeId) {
        paymentModeRepository.findById(modeId.toUpperCase())
                .orElseThrow(() -> new RuntimeException("Payment mode not found: " + modeId));
        paymentModeRepository.deleteById(modeId.toUpperCase());
        return "Payment mode " + modeId.toUpperCase() + " deleted successfully.";
    }
}