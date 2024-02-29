package com.example.demo.Service;
import java.util.List;

import com.example.demo.Entity.Signup;
import com.example.demo.dto.SignupDTO;

public interface SignupService {
    SignupDTO createEmployee(SignupDTO signupDto);

    SignupDTO getEmployeeById(Long SignupId);

    List<SignupDTO> getAllEmployees();

    List<Signup> getAllSignups();

    Signup addSignup(Signup signup);

    Object getSignupById(Long id);

    Signup updateSignup(Long id, Signup newSignup);
}
