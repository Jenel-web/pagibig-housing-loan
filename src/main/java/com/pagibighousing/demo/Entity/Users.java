package com.pagibighousing.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Entity
public class Users {
    @Id
    @Column(name = "pag_ibig_rtn")
    private String pagIbigRtn;

    @Column(name = "borrower_name")
    private String borrowerName;

    @Column(name = "occupation")
    private String occupation;

    @Column(name = "citizenship")
    private String citizenship;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "sex")
    private String sex;

    @Column(name = "home_address")
    private String homeAddress;

    @Column(name = "cellphone_number")
    private String cellphoneNumber;

    @Column(name = "email_address", unique = true)
    private String emailAddress;

    @Column(name = "employer_address")
    private String employerAddress;

    @Column(name = "password")
    private String password;

    public String getPagIbigRtn() {
        return pagIbigRtn;
    }

    public void setPagIbigRtn(String pagIbigRtn) {
        this.pagIbigRtn = pagIbigRtn;
    }

    public String getBorrowerName() {
        return borrowerName;
    }

    public void setBorrowerName(String borrowerName) {
        this.borrowerName = borrowerName;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getCitizenship() {
        return citizenship;
    }

    public void setCitizenship(String citizenship) {
        this.citizenship = citizenship;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    public String getCellphoneNumber() {
        return cellphoneNumber;
    }

    public void setCellphoneNumber(String cellphoneNumber) {
        this.cellphoneNumber = cellphoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getEmployerAddress() {
        return employerAddress;
    }

    public void setEmployerAddress(String employerAddress) {
        this.employerAddress = employerAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
