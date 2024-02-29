package com.example.demo.mapper;

import com.example.demo.Entity.Signup;
import com.example.demo.dto.SignupDTO;


public class SignupMapper {

    public static SignupDTO toDTO(Signup signup) {
        SignupDTO dto = new SignupDTO();
        dto.setUsername(signup.getName());
        dto.setEmail(signup.getEmail());
        dto.setPassword(signup.getPassword());
        dto.setConfirmPassword(signup.getConfirmpassword());
        return dto;
      
    }

    public static Signup toEntity(SignupDTO dto) {
        Signup signup = new Signup();
        signup.setName(dto.getUsername());
        signup.setEmail(dto.getEmail());
        signup.setPassword(dto.getPassword());
        signup.setConfirmpassword(dto.getConfirmPassword());
        return signup;
        
    }
}




