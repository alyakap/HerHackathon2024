package com.hackyourcareer.hackyourcareer.controller;

import com.hackyourcareer.hackyourcareer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.hackyourcareer.hackyourcareer.model.User;

import java.util.List;


@RestController
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/user/{userId}")
  @ResponseStatus(HttpStatus.OK)
  public User getUser(@PathVariable String id) {
    return userService.getUserById(1L);
  }

  @GetMapping("/users")
  @ResponseStatus(HttpStatus.OK)
  public List<User> getUsers() {
    return userService.getAllUsers();
  }

  @PostMapping("/user/new")
  @ResponseStatus(HttpStatus.CREATED)
  public User createUser(@RequestBody User newUser) {
    newUser.setId(1L);
    return userService.addUser(newUser);
  }
}
