package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.LoanRecordId;
import com.pagibighousing.demo.Entity.LoanRecords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRecordsRepository extends JpaRepository<LoanRecords, LoanRecordId> {

    @Query("SELECT lr FROM LoanRecords lr " +
            "JOIN FETCH lr.loan l " +
            "JOIN FETCH l.paymentMode " +
            "JOIN FETCH l.purpose " +
            "JOIN FETCH lr.property p " +
            "WHERE l.user.pagIbigRtn = :pagIbigRtn")
    List<LoanRecords> findAllDetailsByPagIbigRtn(@Param("pagIbigRtn") String pagIbigRtn);

}
