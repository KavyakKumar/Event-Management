package com.example.demo.mapper;

import com.example.demo.dto.AppointmentDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.Entity.Appointment;
import com.example.demo.Entity.User;

@Mapper
public interface AppointmentMapper {

    AppointmentMapper INSTANCE = (AppointmentMapper) Mappers.getMapper(AppointmentMapper.class);

    User toEntity(UserDTO userDTO);

    AppointmentDTO toDTO(Appointment appointment);

    void updateFromDTO(UserDTO userDTO, @MappingTarget User user);

    Object toDTO(UserDTO user);
}
