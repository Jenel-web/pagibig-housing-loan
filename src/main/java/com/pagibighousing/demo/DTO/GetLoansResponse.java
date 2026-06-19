package com.pagibighousing.demo.DTO;

public class GetLoansResponse {
    private String loanId;
    private Double desiredLoanAmount;
    private Integer desiredLoanTerm;
    private Double downpaymentAmount;
    private Double installmentAmount;
    private String paymentModeDescription;
    private String purposeDescription;
    private String propertyId;
    private String propertyLocation;
    private Double collateralValue;
    private String status;
    private String pagIbigRtn;

    public GetLoansResponse(String loanId,
                            Double desiredLoanAmount,
                            Integer desiredLoanTerm,
                            Double downpaymentAmount,
                            Double installmentAmount,
                            String paymentModeDescription,
                            String purposeDescription,
                            String propertyId,
                            String propertyLocation,
                            Double collateralValue,
                            String status,
                            String pagIbigRtn) {
        this.loanId = loanId;
        this.desiredLoanAmount = desiredLoanAmount;
        this.desiredLoanTerm = desiredLoanTerm;
        this.downpaymentAmount = downpaymentAmount;
        this.installmentAmount = installmentAmount;
        this.paymentModeDescription = paymentModeDescription;
        this.purposeDescription = purposeDescription;
        this.propertyId = propertyId;
        this.propertyLocation = propertyLocation;
        this.collateralValue = collateralValue;
        this.status = status;
        this.pagIbigRtn = pagIbigRtn;
    }

    public String getLoanId() {
        return loanId;
    }

    public void setLoanId(String loanId) {
        this.loanId = loanId;
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

    public String getPaymentModeDescription() {
        return paymentModeDescription;
    }

    public void setPaymentModeDescription(String paymentModeDescription) {
        this.paymentModeDescription = paymentModeDescription;
    }

    public String getPurposeDescription() {
        return purposeDescription;
    }

    public void setPurposeDescription(String purposeDescription) {
        this.purposeDescription = purposeDescription;
    }

    public String getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(String propertyId) {
        this.propertyId = propertyId;
    }

    public String getPropertyLocation() {
        return propertyLocation;
    }

    public void setPropertyLocation(String propertyLocation) {
        this.propertyLocation = propertyLocation;
    }

    public Double getCollateralValue() {
        return collateralValue;
    }

    public void setCollateralValue(Double collateralValue) {
        this.collateralValue = collateralValue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPagIbigRtn() {
        return pagIbigRtn;
    }

    public void setPagIbigRtn(String pagIbigRtn) {
        this.pagIbigRtn = pagIbigRtn;
    }
}
