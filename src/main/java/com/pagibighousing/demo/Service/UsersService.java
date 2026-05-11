package com.pagibighousing.demo.Service;

import com.pagibighousing.demo.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UsersService {

    @Autowired
    private UsersRepository usersRepository;
}
