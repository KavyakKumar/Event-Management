package com.example.demo.mapper;

import com.example.demo.dto.UserDTO;
import com.example.demo.Entity.User;
import org.mapstruct.Mapping;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(target = "id", ignore = true)
    User toEntity(UserDTO userDTO);

    UserDTO toDTO(User user);

    void updateFromDTO(UserDTO userDTO, @MappingTarget User user);
}
