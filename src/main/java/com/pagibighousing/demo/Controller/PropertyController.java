package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.DTO.AddPropertyRequest;
import com.pagibighousing.demo.DTO.GetUserPropertiesRequest;
import com.pagibighousing.demo.DTO.RemoveUserProperty;
import com.pagibighousing.demo.Entity.Property;
import com.pagibighousing.demo.Service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/property")
@CrossOrigin(origins = "http://localhost:5173")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @PostMapping("/add")
    public ResponseEntity<Property> addProperty(@RequestBody AddPropertyRequest request) {
        Property property = propertyService.addProperty(request);

        return ResponseEntity.ok(property);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Property>> getUserProperties(GetUserPropertiesRequest request) {
        List<Property> propertyList = propertyService.getUserProperties(request);

        return ResponseEntity.ok(propertyList);

    }

    @PostMapping("/remove") // Safe alternative to handling bodies in DELETE requests
    public ResponseEntity<?> removeProperty(@RequestBody RemoveUserProperty request) {
        try {
            List<Property> remainingProperties = propertyService.removeProperty(request);
            return ResponseEntity.ok(remainingProperties);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Deletion Failed: " + e.getMessage());
        }
    }

}
