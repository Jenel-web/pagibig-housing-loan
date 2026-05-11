package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.Loans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoansRepository extends JpaRepository<Loans,String> {
}
