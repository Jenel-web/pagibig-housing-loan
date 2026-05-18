package com.pagibighousing.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Purpose {
    @Id
    private String purposeId;

    private String purposeDescription;

    public String getPurposeId() {
        return purposeId;
    }

    public void setPurposeId(String purposeId) {
        this.purposeId = purposeId;
    }

    public String getPurpose_description() {
        return purposeDescription;
    }

    public void setPurpose_description(String purposeDescription) {
        this.purposeDescription = purposeDescription;
    }
}
