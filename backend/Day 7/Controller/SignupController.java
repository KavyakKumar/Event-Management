package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Signup;
import com.example.demo.Service.SignupService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/signup")
public class SignupController {

    @Autowired
    private SignupService signupService;

    @GetMapping("/all")
    public List<Signup> getAllSignups() {
        return signupService.getAllSignups();
    }

    @PostMapping("/add")
    public Signup addSignup(@RequestBody Signup signup) {
        return signupService.addSignup(signup);
    }

    @SuppressWarnings("unchecked")
    @GetMapping("/{id}")
    public Signup getSignupById(@PathVariable Long id) {
        return ((Optional<Signup>) signupService.getSignupById(id))
                .orElseThrow(() -> new IllegalArgumentException("Invalid signup ID: " + id));
    }

    @PutMapping("/{id}")
    public Signup updateSignup(@PathVariable Long id, @RequestBody Signup newSignup) {
        return signupService.updateSignup(id, newSignup);
    }

    @DeleteMapping("/{id}")
    public void deleteSignup(@PathVariable Signup id) {
        signupService.addSignup(id);
    }
}
