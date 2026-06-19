package com.pagibighousing.demo.Config;

import com.pagibighousing.demo.Entity.Users;
import com.pagibighousing.demo.Repository.UsersRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initAdminUser(UsersRepository usersRepository) {
        return args -> {
            String adminEmail = "admin@test.com";
            if (usersRepository.findByEmailAddress(adminEmail).isEmpty()) {
                Users admin = new Users();
                admin.setPagIbigRtn("000000000000"); // Master RTN
                admin.setEmailAddress(adminEmail);
                admin.setPassword("password123");
                admin.setRole("ADMIN");
                
                admin.setBorrowerName("System Administrator");
                admin.setOccupation("Admin");
                admin.setCitizenship("Filipino");
                admin.setDateOfBirth(LocalDate.of(1990, 1, 1));
                admin.setSex("Male");
                admin.setHomeAddress("System Admin Office");
                admin.setCellphoneNumber("09170000000");
                admin.setEmployerAddress("N/A");
                
                usersRepository.save(admin);
                System.out.println("Master Admin Account injected successfully.");
            }
        };
    }
}
