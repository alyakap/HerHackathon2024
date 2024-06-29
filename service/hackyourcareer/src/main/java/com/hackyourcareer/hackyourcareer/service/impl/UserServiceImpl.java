package com.hackyourcareer.hackyourcareer.service.impl;

import com.hackyourcareer.hackyourcareer.model.User;
import com.hackyourcareer.hackyourcareer.repository.UserRepository;
import com.hackyourcareer.hackyourcareer.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Autowired
    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return repository.getReferenceById(id);
    }

    @Override
    public Optional<User> findUserByUsername(String username) {
        return repository.findByUsernameIgnoreCase(username);
    }

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }
}
