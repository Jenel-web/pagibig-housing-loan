package com.pagibighousing.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class PaymentMode {
    @Id
    private String modeId;
    private String paymentModeDescription;

    public String getModeId() {
        return modeId;
    }

    public void setModeId(String modeId) {
        this.modeId = modeId;
    }

    public String getPaymentModeDescription() {
        return paymentModeDescription;
    }

    public void setPaymentModeDescription(String paymentModeDescription) {
        this.paymentModeDescription = paymentModeDescription;
    }
}
