package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.PaymentMode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PaymentModeRepository extends JpaRepository<PaymentMode, String> {

    Optional<PaymentMode> findByPaymentModeDescription(String paymentModeDescription);
}
