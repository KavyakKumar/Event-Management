package com.example.demo.mapper;

import org.springframework.web.bind.annotation.Mapping;

import com.example.demo.Entity.Events;

@Mapper
public interface EventsMapper {

    EventsMapper INSTANCE = Mappers.getMapper(EventsMapper.class);

    @org.mapstruct.Mapping(target = "id", ignore = true)
    Events toEntity(EventsDTO eventsDTO);

    EventsDTO toDTO(Events events);

    void updateFromDTO(EventsDTO eventsDTO, @MappingTarget Events events);
}
