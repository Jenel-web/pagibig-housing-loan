package com.pagibighousing.demo.Entity;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class LoanRecordId implements Serializable {
    private String loanId;
    private String propertyId;

    public LoanRecordId() {}

    public LoanRecordId(String loanId, String propertyId) {
        this.loanId = loanId;
        this.propertyId = propertyId;
    }

    // Hibernate NEEDS these to compare IDs
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof LoanRecordId that)) return false;
        return Objects.equals(loanId, that.loanId) && Objects.equals(propertyId, that.propertyId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(loanId, propertyId);
    }
}