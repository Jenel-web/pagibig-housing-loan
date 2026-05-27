package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.DTO.AddPurposeDTO;
import com.pagibighousing.demo.Entity.Purpose;
import com.pagibighousing.demo.Repository.PurposeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurposeService {

    @Autowired
    private PurposeRepository purposeRepository;

    // CREATE
    @Transactional
    public String addPurpose(AddPurposeDTO addPurposeDTO){

        Purpose purpose = new Purpose();

        purpose.setPurposeId(addPurposeDTO.getPurposeId());
        purpose.setPurpose_description(addPurposeDTO.getPurpose_description());

        purposeRepository.save(purpose);

        return "Purpose Added Successfully";
    }

    // READ ALL
    public List<Purpose> getAllPurpose(){

        return purposeRepository.findAll();
    }

    // READ ONE
    public Purpose getPurposeById(String purposeId){

        return purposeRepository.findById(purposeId)
                .orElseThrow(() -> new RuntimeException("Purpose not found"));
    }

    // UPDATE
    @Transactional
    public String updatePurpose(String purposeId, AddPurposeDTO addPurposeDTO){

        Purpose purpose = purposeRepository.findById(purposeId)
                .orElseThrow(() -> new RuntimeException("Purpose not found"));

        purpose.setPurpose_description(addPurposeDTO.getPurpose_description());

        purposeRepository.save(purpose);

        return "Purpose Updated Successfully";
    }

    // DELETE
    @Transactional
    public String deletePurpose(String purposeId){

        Purpose purpose = purposeRepository.findById(purposeId)
                .orElseThrow(() -> new RuntimeException("Purpose not found"));

        purposeRepository.delete(purpose);

        return "Purpose Deleted Successfully";
    }
}