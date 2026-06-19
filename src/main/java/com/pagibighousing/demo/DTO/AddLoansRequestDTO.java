package com.pagibighousing.demo.DTO;

public class AddLoansRequestDTO {
    private String pagIbigRtn;
    private String purposeId;
    private String modeId;
    private Integer desiredLoanTerm;
    private Double desiredLoanAmount;
    private Double downpaymentAmount;
    private String propertyId;
    private Double collateralValue;

    //what's happening here is that
    //when the user applies for a loan, we will take until down payment amount
    // and derived the other details,then save the loan. then we will handle the adding of the
    //loan records using the loanId, propertyID and the collateral value.


    public String getPagIbigRtn() {
        return pagIbigRtn;
    }

    public void setPagIbigRtn(String pagIbigRtn) {
        this.pagIbigRtn = pagIbigRtn;
    }

    public String getPurposeId() {
        return purposeId;
    }

    public void setPurposeId(String purposeId) {
        this.purposeId = purposeId;
    }

    public String getModeId() {
        return modeId;
    }

    public void setModeId(String modeId) {
        this.modeId = modeId;
    }

    public Integer getDesiredLoanTerm() {
        return desiredLoanTerm;
    }

    public void setDesiredLoanTerm(Integer desiredLoanTerm) {
        this.desiredLoanTerm = desiredLoanTerm;
    }

    public Double getDesiredLoanAmount() {
        return desiredLoanAmount;
    }

    public void setDesiredLoanAmount(Double desiredLoanAmount) {
        this.desiredLoanAmount = desiredLoanAmount;
    }

    public Double getDownpaymentAmount() {
        return downpaymentAmount;
    }

    public void setDownpaymentAmount(Double downpaymentAmount) {
        this.downpaymentAmount = downpaymentAmount;
    }

    public String getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(String propertyId) {
        this.propertyId = propertyId;
    }

    public Double getCollateralValue() {
        return collateralValue;
    }

    public void setCollateralValue(Double collateralValue) {
        this.collateralValue = collateralValue;
    }
}
