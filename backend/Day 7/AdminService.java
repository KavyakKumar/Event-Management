package com.example.demo.Service;

import java.util.List;

import com.example.demo.dto.AdminDTO; // Add missing import statement

public interface AdminService {

    AdminDTO authenticateAdmin(String username, String password);

    AdminDTO getAdminById(Long id);

    List<AdminDTO> getAllAdmins();

    AdminDTO createAdmin(AdminDTO adminDTO);

    AdminDTO updateAdmin(Long id, AdminDTO adminDTO);

    void deleteAdmin(Long id);
}
