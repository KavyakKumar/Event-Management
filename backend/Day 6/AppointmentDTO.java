package com.example.demo.dto;

import java.util.Date;

public class AppointmentDTO {

    private Long id;
    private Date date;
    private Date time;
    private Long userId;


    public AppointmentDTO() {
    }

    public AppointmentDTO(Long id, Date date, Date time, Long userId) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
