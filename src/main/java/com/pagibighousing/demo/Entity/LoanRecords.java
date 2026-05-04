package com.pagibighousing.demo.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LoanRecords {
    @Id
    private Loans loan;
    @Id
    private Property property;

    private Double collateralValue;

    public Loans getLoan() {
        return loan;
    }

    public void setLoan(Loans loan) {
        this.loan = loan;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public Double getCollateralValue() {
        return collateralValue;
    }

    public void setCollateralValue(Double collateralValue) {
        this.collateralValue = collateralValue;
    }
}
