package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.Entity.Users;
import com.pagibighousing.demo.Service.UsersService;
import com.pagibighousing.demo.DTO.LoginRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Users user) {
        try {
            Users createdUser = usersService.registerUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Users> loginUser(@RequestBody LoginRequestDTO loginRequest) {
        Optional<Users> authenticatedUser = usersService.authenticateUser(loginRequest.getEmailAddress(), loginRequest.getPassword());
        if (authenticatedUser.isPresent()) {
            return ResponseEntity.ok(authenticatedUser.get());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers() {
        return ResponseEntity.ok(usersService.getAllUsers());
    }

    @GetMapping("/{rtn}")
    public ResponseEntity<Users> getUserByRtn(@PathVariable String rtn) {
        return usersService.getUserByRtn(rtn)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{rtn}")
    public ResponseEntity<String> updateUser(@PathVariable String rtn, @RequestBody Users userDetails) {
        try {
            String response = usersService.updateUser(rtn, userDetails);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{rtn}")
    public ResponseEntity<String> deleteUser(@PathVariable String rtn) {
        try {
            String response = usersService.deleteUser(rtn);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}