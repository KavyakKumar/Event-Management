package com.example.demo.Repository;

import com.example.demo.Entity.Appointment;
import com.example.demo.Entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    Appointment save(User appointment);
    
    // Define additional query methods if needed
}
