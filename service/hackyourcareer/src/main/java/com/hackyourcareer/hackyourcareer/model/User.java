package com.hackyourcareer.hackyourcareer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public record User(Long id, String username) {}
