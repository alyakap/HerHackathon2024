package com.hackyourcareer.hackyourcareer.controller;

import com.hackyourcareer.hackyourcareer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.hackyourcareer.hackyourcareer.model.User;

import java.util.List;


@RestController()
@RequestMapping("/users")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public User getOneUserById(@PathVariable Long id) {
    return userService.getUserById(id);
  }

  @GetMapping()
  @ResponseStatus(HttpStatus.OK)
  public List<User> getUsers() {
    return userService.getAllUsers();
  }

  @PostMapping("/new")
  @ResponseStatus(HttpStatus.CREATED)
  public User createUser(@RequestBody User newUser) {
    return userService.addUser(newUser);
  }
}
