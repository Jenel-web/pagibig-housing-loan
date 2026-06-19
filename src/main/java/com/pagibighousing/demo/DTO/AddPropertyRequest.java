package com.pagibighousing.demo.DTO;

import com.pagibighousing.demo.Entity.Users;

public class AddPropertyRequest {
    private String propertyId;
    private String pagIbigRtn;
    private String propertyLocation;
    private String titleHolderName;

    public String getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(String propertyId) {
        this.propertyId = propertyId;
    }

    public String getPagIbigRtn() {
        return pagIbigRtn;
    }

    public void setPagIbigRtn(String pagIbigRtn) {
        this.pagIbigRtn = pagIbigRtn;
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
