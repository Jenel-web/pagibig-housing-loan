package com.pagibighousing.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Property {
    @Id
    private String propertyId;

    private String propertyLocation;
    private String titleHolderName;

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

    public String getTitleHolderName() {
        return titleHolderName;
    }

    public void setTitleHolderName(String titleHolderName) {
        this.titleHolderName = titleHolderName;
    }
}
