package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface PropertyRepository extends JpaRepository<Property, String> {

    Optional<Property> findByPropertyId(String propertyId);
}
