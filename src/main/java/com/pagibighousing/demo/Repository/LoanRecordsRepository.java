package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.LoanRecordId;
import com.pagibighousing.demo.Entity.LoanRecords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanRecordsRepository extends JpaRepository<LoanRecords, LoanRecordId> {

}
