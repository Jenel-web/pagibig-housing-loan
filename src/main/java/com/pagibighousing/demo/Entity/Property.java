package com.pagibighousing.demo.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class Property {
    @Id
    private String propertyId;
    @ManyToOne
    @JoinColumn(name = "pag_ibig_rtn")
    @JsonIgnoreProperties("properties")
    private Users user;
    private String propertyLocation;
    private String titleHolderName;

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
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

    public String getTitleHolderName() {
        return titleHolderName;
    }

    public void setTitleHolderName(String titleHolderName) {
        this.titleHolderName = titleHolderName;
    }
}
