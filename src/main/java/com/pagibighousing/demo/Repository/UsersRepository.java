package com.pagibighousing.demo.Repository;

import com.pagibighousing.demo.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {
    Optional<Users> findByEmailAddressAndPassword(String emailAddress, String password);
}
