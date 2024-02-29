package com.example.demo.Repository;

import com.example.demo.Entity.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Events, Long> {
    
    // Define additional query methods if needed
}
