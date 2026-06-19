package com.pagibighousing.demo.Entity;

import jakarta.persistence.*;

@Entity
public class    Loans {

    @Id
    private String loanId;
    @ManyToOne
    @JoinColumn(name = "mode_id")
    private PaymentMode paymentMode;
    @ManyToOne
    @JoinColumn(name = "purpose_id")
    private Purpose purpose;

    @ManyToOne
    @JoinColumn(name = "pag_Ibig_Rtn")
    private Users user;
    private Double desiredLoanAmount;
    private Integer desiredLoanTerm;
    private Double downpaymentAmount;
    private Double installmentAmount;
    private String status;

    public String getLoanId() {
        return loanId;
    }

    public void setLoanId(String loanId) {
        this.loanId = loanId;
    }

    public PaymentMode getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(PaymentMode paymentMode) {
        this.paymentMode = paymentMode;
    }

    public Purpose getPurpose() {
        return purpose;
    }

    public void setPurpose(Purpose purpose) {
        this.purpose = purpose;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Double getDesiredLoanAmount() {
        return desiredLoanAmount;
    }

    public void setDesiredLoanAmount(Double desiredLoanAmount) {
        this.desiredLoanAmount = desiredLoanAmount;
    }

    public Integer getDesiredLoanTerm() {
        return desiredLoanTerm;
    }

    public void setDesiredLoanTerm(Integer desiredLoanTerm) {
        this.desiredLoanTerm = desiredLoanTerm;
    }

    public Double getDownpaymentAmount() {
        return downpaymentAmount;
    }

    public void setDownpaymentAmount(Double downpaymentAmount) {
        this.downpaymentAmount = downpaymentAmount;
    }

    public Double getInstallmentAmount() {
        return installmentAmount;
    }

    public void setInstallmentAmount(Double installmentAmount) {
        this.installmentAmount = installmentAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
