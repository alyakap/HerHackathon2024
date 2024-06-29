package com.hackyourcareer.hackyourcareer.service;

import com.hackyourcareer.hackyourcareer.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    Optional<User> findUserByUsername(String username);
    User getUserById(Long id);
    User addUser(User user);
}
