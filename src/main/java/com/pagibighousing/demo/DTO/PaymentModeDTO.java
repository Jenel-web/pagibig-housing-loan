package com.pagibighousing.demo.DTO;

public class PaymentModeDTO {
    private String modeId;
    private String paymentModeDescription;

    public String getModeId() { return modeId; }
    public void setModeId(String modeId) { this.modeId = modeId; }

    public String getPaymentModeDescription() { return paymentModeDescription; }
    public void setPaymentModeDescription(String paymentModeDescription) {
        this.paymentModeDescription = paymentModeDescription;
    }
}