package com.pagibighousing.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Purpose {
    @Id
    private String purposeId;

    private String purpose_description;

    public String getPurposeId() {
        return purposeId;
    }

    public void setPurposeId(String purposeId) {
        this.purposeId = purposeId;
    }

    public String getPurpose_description() {
        return purpose_description;
    }

    public void setPurpose_description(String purpose_description) {
        this.purpose_description = purpose_description;
    }
}
