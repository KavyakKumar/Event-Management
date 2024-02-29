package com.example.demo.dto;

import java.util.Date;

public class EventDTO {

    private Long id;
    private String name;
    private Date date;
    private String description;

    public EventDTO() {
    }

    public EventDTO(Long id, String name, Date date, String description) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
