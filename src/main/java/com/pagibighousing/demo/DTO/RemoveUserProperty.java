package com.pagibighousing.demo.DTO;

public class RemoveUserProperty {
    private String propertyId;
    private String pagIbigRtn;

    public RemoveUserProperty(String propertyId, String pagIbigRtn) {
        this.propertyId = propertyId;
        this.pagIbigRtn = pagIbigRtn;
    }

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
}
