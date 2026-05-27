package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.Loans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoansRepository extends JpaRepository<Loans,String> {

    @Query("SELECT DISTINCT l FROM Loans l " +
            "JOIN FETCH l.paymentMode " +
            "JOIN FETCH l.purpose " +
            "WHERE l.user.pagIbigRtn = :pagIbigRtn")
    List<Loans> findLoansByPagIbigRtn(@Param("pagIbigRtn") String pagIbigRtn);
}
