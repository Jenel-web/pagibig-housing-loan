package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.Entity.Users;
import com.pagibighousing.demo.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository; // Injected dependency to manage user tables[cite: 47]

    // Create / Register Profile
    @Transactional
    public String registerUser(Users user) {
        if (usersRepository.existsById(user.getPagIbigRtn())) {
            throw new RuntimeException("User with this Pag-IBIG RTN already exists.");
        }
        usersRepository.save(user);
        return "User profile registered successfully!";
    }

    // Read / Fetch All Profiles
    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    // Read / Find Single Profile by Key
    public Optional<Users> getUserByRtn(String rtn) {
        return usersRepository.findById(rtn);
    }

    // Authenticate User by Email and Password
    public Optional<Users> authenticateUser(String emailAddress, String password) {
        return usersRepository.findByEmailAddressAndPassword(emailAddress, password);
    }

    // Update / Modify Existing Profile
    @Transactional
    public String updateUser(String rtn, Users userDetails) {
        Users existingUser = usersRepository.findById(rtn)
                .orElseThrow(() -> new RuntimeException("User profile not found with RTN: " + rtn));

        existingUser.setBorrowerName(userDetails.getBorrowerName());
        existingUser.setOccupation(userDetails.getOccupation());
        existingUser.setCitizenship(userDetails.getCitizenship());
        existingUser.setDateOfBirth(userDetails.getDateOfBirth());
        existingUser.setSex(userDetails.getSex());
        existingUser.setHomeAddress(userDetails.getHomeAddress());
        existingUser.setCellphoneNumber(userDetails.getCellphoneNumber());
        existingUser.setEmailAddress(userDetails.getEmailAddress());
        existingUser.setEmployerAddress(userDetails.getEmployerAddress());
        if (userDetails.getPassword() != null && !userDetails.getPassword().isEmpty()) {
            existingUser.setPassword(userDetails.getPassword());
        }

        usersRepository.save(existingUser);
        return "User profile updated successfully!";
    }

    // Delete / Remove Profile
    @Transactional
    public String deleteUser(String rtn) {
        if (!usersRepository.existsById(rtn)) {
            throw new RuntimeException("Cannot delete. User profile not found.");
        }
        usersRepository.deleteById(rtn);
        return "User profile deleted successfully.";
    }
}