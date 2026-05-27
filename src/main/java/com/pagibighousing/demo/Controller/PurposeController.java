package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.DTO.AddPurposeDTO;
import com.pagibighousing.demo.Entity.Purpose;
import com.pagibighousing.demo.Service.PurposeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/purpose")
@RestController
public class PurposeController {

    @Autowired
    private PurposeService purposeService;

    // CREATE
    @PostMapping("/add")
    public ResponseEntity<String> addPurpose(@RequestBody AddPurposeDTO addPurposeDTO){

        String response = purposeService.addPurpose(addPurposeDTO);

        return ResponseEntity.ok(response);
    }

    // READ ALL
    @GetMapping("/all")
    public ResponseEntity<List<Purpose>> getAllPurpose(){

        return ResponseEntity.ok(purposeService.getAllPurpose());
    }

    // READ ONE
    @GetMapping("/{purposeId}")
    public ResponseEntity<Purpose> getPurposeById(@PathVariable String purposeId){

        return ResponseEntity.ok(purposeService.getPurposeById(purposeId));
    }

    // UPDATE
    @PutMapping("/update/{purposeId}")
    public ResponseEntity<String> updatePurpose(
            @PathVariable String purposeId,
            @RequestBody AddPurposeDTO addPurposeDTO){

        String response = purposeService.updatePurpose(purposeId, addPurposeDTO);

        return ResponseEntity.ok(response);
    }

    // DELETE
    @DeleteMapping("/delete/{purposeId}")
    public ResponseEntity<String> deletePurpose(@PathVariable String purposeId){

        String response = purposeService.deletePurpose(purposeId);

        return ResponseEntity.ok(response);
    }
}