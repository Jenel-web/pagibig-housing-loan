package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.Purpose;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurposeRepository  extends JpaRepository<Purpose, String> {


}
