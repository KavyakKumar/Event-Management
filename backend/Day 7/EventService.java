package com.example.demo.Service;

import com.example.demo.dto.EventDTO;

import java.util.List;

public interface EventService {

    EventDTO getEventById(Long id);

    List<EventDTO> getAllEvents();

    EventDTO createEvent(EventDTO eventDTO);

    EventDTO updateEvent(Long id, EventDTO eventDTO);

    void deleteEvent(Long id);
}
