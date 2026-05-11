package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.DTO.AddPurposeDTO;
import com.pagibighousing.demo.Entity.Purpose;
import com.pagibighousing.demo.Entity.Users;
import com.pagibighousing.demo.Repository.PurposeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurposeService {

    @Autowired
    private PurposeRepository purposeRepository;

    public String addPurpose(AddPurposeDTO addPurposeDTO){
        Purpose purpose = new Purpose();
        purpose.setPurposeId(addPurposeDTO.getPurposeId());
        purpose.setPurpose_description(addPurposeDTO.getPurpose_description());
        purposeRepository.save(purpose);

        return "Purpose Added Successfully";
    }
}
