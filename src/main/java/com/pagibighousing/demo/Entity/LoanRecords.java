package com.pagibighousing.demo.Entity;

import com.pagibighousing.demo.Entity.LoanRecordId;
import com.pagibighousing.demo.Entity.Loans;
import com.pagibighousing.demo.Entity.Property;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class LoanRecords {
    @EmbeddedId
    private LoanRecordId id;

    @ManyToOne
    @MapsId("loanId") // Maps the 'loanId' part of the composite key
    @JoinColumn(name = "loan_id")
    private Loans loan;

    @ManyToOne
    @MapsId("propertyId") // Maps the 'propertyId' part of the composite key
    @JoinColumn(name = "property_id")
    private Property property;

    private Double collateralValue;

    public LoanRecordId getId() {
        return id;
    }

    public void setId(LoanRecordId id) {
        this.id = id;
    }

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

