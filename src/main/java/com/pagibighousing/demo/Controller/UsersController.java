package com.pagibighousing.demo.Controller;

import com.pagibighousing.demo.Entity.Users;
import com.pagibighousing.demo.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Users user) {
        try {
            String response = usersService.registerUser(user);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
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