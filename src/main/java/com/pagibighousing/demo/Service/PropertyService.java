package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.DTO.RemoveUserProperty;
import com.pagibighousing.demo.DTO.AddPropertyRequest;
import com.pagibighousing.demo.DTO.GetUserPropertiesRequest;
import com.pagibighousing.demo.Entity.Property;
import com.pagibighousing.demo.Entity.Users;
import com.pagibighousing.demo.Repository.PropertyRepository;
import com.pagibighousing.demo.Repository.UsersRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Transactional
    public Property addProperty(AddPropertyRequest request) {
        // 1. Validate if the user profile exists in the database
        Users user = usersRepository.findById(request.getPagIbigRtn())
                .orElseThrow(() -> new RuntimeException("Cannot add property: User profile not found with RTN: " + request.getPagIbigRtn()));

        // 2. Instantiate the Property entity and map the fields from the DTO
        Property property = new Property();
        property.setPropertyId(request.getPropertyId());
        property.setPropertyLocation(request.getPropertyLocation());
        property.setTitleHolderName(request.getTitleHolderName());

        // Bind the fetched Users entity to satisfy the @ManyToOne relationship
        property.setUser(user);

        propertyRepository.save(property);
        // 3. Persist the property to the database
        return property;
    }

    public List<Property> getUserProperties(GetUserPropertiesRequest request) {
        // Optional: Validate if the user exists first if you want to throw an explicit error
        if (!usersRepository.existsById(request.getPagIbigRtn())) {
            throw new RuntimeException("Cannot fetch properties: User profile not found with RTN: " + request.getPagIbigRtn());
        }

        return propertyRepository.findByUser_PagIbigRtn(request.getPagIbigRtn());
    }

    @Transactional
    public List<Property> removeProperty(RemoveUserProperty request) {
        // 1. Verify if the property exists and is actually linked to this user
        boolean hasOwnership = propertyRepository.existsByPropertyIdAndUser_PagIbigRtn(
                request.getPropertyId(),
                request.getPagIbigRtn()
        );

        if (!hasOwnership) {
            throw new RuntimeException("Cannot delete: Property not found or does not belong to RTN: " + request.getPagIbigRtn());
        }

        // 2. Perform the deletion
        propertyRepository.deleteByPropertyIdAndUser_PagIbigRtn(request.getPropertyId(), request.getPagIbigRtn());

        // 3. Return the remaining active properties belonging to the user
        return propertyRepository.findByUser_PagIbigRtn(request.getPagIbigRtn());
    }
}

