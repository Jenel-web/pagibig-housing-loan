package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.DTO.AddPurposeDTO;
import com.pagibighousing.demo.Service.PurposeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/purpose")
@RestController
public class PurposeController {

    @Autowired
    private PurposeService purposeService;

    @PostMapping("/add")
    public ResponseEntity<String> addPurpose(@RequestBody AddPurposeDTO addPurposeDTO){
        String response = purposeService.addPurpose(addPurposeDTO);
        return ResponseEntity.ok(response);

    }
}
