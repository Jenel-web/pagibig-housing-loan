package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.DTO.AddPropertyRequest;
import com.pagibighousing.demo.Entity.Property;
import com.pagibighousing.demo.Service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/property")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @PostMapping("/add")
    public ResponseEntity<Property> addProperty(@RequestBody AddPropertyRequest request){
       Property property = propertyService.addProperty(request);

       return ResponseEntity.ok(property);
    }
}
