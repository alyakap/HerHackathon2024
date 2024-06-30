package com.hackyourcareer.hackyourcareer.controller;

import com.hackyourcareer.hackyourcareer.model.User;
import com.hackyourcareer.hackyourcareer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/generateMentor")
public class MentorGeneratorController {

    private final UserService userService;

    @Autowired
    public MentorGeneratorController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<User> generateMentors(@PathVariable Long id) {
        return userService.generateMentorsForUser(id);
    }
}
