package com.example.demo.mapper;

import com.example.demo.dto.AdminDTO;

import com.example.demo.Entity.Admin;

@Mapper
public interface AdminMapper {

    AdminMapper INSTANCE = Mappers.getMapper(AdminMapper.class); // Use the getMapper(Class<?>) method with the appropriate argument

    Admin toEntity(AdminDTO adminDTO);

    AdminDTO toDTO(Admin admin);

    void updateFromDTO(AdminDTO adminDTO, @MappingTarget Admin admin);
}
