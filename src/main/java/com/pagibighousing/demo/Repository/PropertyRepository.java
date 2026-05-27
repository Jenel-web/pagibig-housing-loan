package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface PropertyRepository extends JpaRepository<Property, String> {

    Optional<Property> findByPropertyId(String propertyId);

    // Spring Data JPA automatically derives the SQL query from this method name
    List<Property> findByUser_PagIbigRtn(String pagIbigRtn);

    // Deletes the property if both the propertyId and the user's RTN match up perfectly
    void deleteByPropertyIdAndUser_PagIbigRtn(String propertyId, String pagIbigRtn);

    // Helpful check to verify ownership before attempting a deletion
    boolean existsByPropertyIdAndUser_PagIbigRtn(String propertyId, String pagIbigRtn);
}
