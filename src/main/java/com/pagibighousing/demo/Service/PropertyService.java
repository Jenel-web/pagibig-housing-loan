package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.Repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;
}
