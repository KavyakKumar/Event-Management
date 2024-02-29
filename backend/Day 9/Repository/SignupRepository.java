package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Signup;

@Repository
public interface SignupRepository extends JpaRepository<Signup, Long> {
    // You can add custom query methods here if needed
}
