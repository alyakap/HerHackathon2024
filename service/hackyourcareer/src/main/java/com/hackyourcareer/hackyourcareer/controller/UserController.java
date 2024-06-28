package com.hackyourcareer.hackyourcareer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackyourcareer.hackyourcareer.model.User;


@RestController
public class UserController {


  @GetMapping("/user")
  public User getUser() {
    return new User(1L, "name");
  }
}
