package com.hackyourcareer.hackyourcareer.repository;

import com.hackyourcareer.hackyourcareer.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsernameIgnoreCase(String username);
    List<User> findAllByUsernameContainingIgnoreCase(String username);
    Set<User> findAllByIsMentorTrue();
}
