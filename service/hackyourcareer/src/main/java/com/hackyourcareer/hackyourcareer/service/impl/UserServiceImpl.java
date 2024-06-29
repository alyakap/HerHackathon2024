package com.hackyourcareer.hackyourcareer.service.impl;

import com.hackyourcareer.hackyourcareer.model.Interest;
import com.hackyourcareer.hackyourcareer.model.Personality;
import com.hackyourcareer.hackyourcareer.model.Skill;
import com.hackyourcareer.hackyourcareer.model.User;
import com.hackyourcareer.hackyourcareer.repository.UserRepository;
import com.hackyourcareer.hackyourcareer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
        Optional<User> user = repository.findById(id);
        return user.orElse(new User());
    }

    @Override
    public Set<User> getAllMentors() {
        return repository.findAllByIsMentorTrue();
    }

    @Override
    public Optional<User> findUserByUsername(String username) {
        return repository.findByUsernameIgnoreCase(username);
    }

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> generateMentorsForUser(Long id) {
        User user = getUserById(id);

        return getAllMentors().stream()
                .sorted(Comparator.comparingInt((User mentor) -> getSkillsScore(user, mentor)
                        + getInterestScore(user, mentor)).reversed())
                .limit(5)
                .collect(Collectors.toList());
    }

    private int getSkillsScore(User user, User mentor) {
        int count = 0;
        for (Skill skill : user.getSkillsSet()) {
            if (mentor.getSkillsSet().contains(skill)) {
                count++;
            }
        }
        return count;
    }

    public int getInterestScore(User user, User mentor) {
        int count = 0;
        for (Interest interest : user.getInterestsSet()) {
            if (mentor.getInterestsSet().contains(interest)) {
                count++;
            }
        }
        return count;
    }

}
