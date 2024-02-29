package com.example.demo.Service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Signup;
import com.example.demo.Repository.SignupRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SignupServiceimpl {

    @Autowired
    private SignupRepository signupRepository;

    public List<Signup> getAllSignups() {
        return signupRepository.findAll();
    }

    public Optional<Signup> getSignupById(Long id) {
        return signupRepository.findById(id);
    }

    public Signup addSignup(Signup signup) {
        return signupRepository.save(signup);
    }

    public Signup updateSignup(Long id, Signup newSignup) {
        return signupRepository.findById(id)
                .map(signup -> {
                    signup.setName(newSignup.getName());
                    signup.setEmail(newSignup.getEmail());
                    signup.setPassword(newSignup.getPassword());
                    return signupRepository.save(signup);
                })
                .orElseGet(() -> {
                    newSignup.setId(id);
                    return signupRepository.save(newSignup);
                });
    }

    public void deleteSignup(Long id) {
        signupRepository.deleteById(id);
    }
}



