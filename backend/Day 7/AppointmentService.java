package com.example.demo.Service;

import com.example.demo.dto.AppointmentDTO;

import java.util.List;

public interface AppointmentService {

    AppointmentDTO getAppointmentById(Long id);

    List<AppointmentDTO> getAllAppointments();

    AppointmentDTO createAppointment(AppointmentDTO appointmentDTO);

    AppointmentDTO updateAppointment(Long id, AppointmentDTO appointmentDTO);

    void deleteAppointment(Long id);
}
