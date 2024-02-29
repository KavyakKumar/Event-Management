package com.example.demo.Entity;

// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;

// @Entity
// public class Signup {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String username;
//     private String email;
//     private String password;
//     private String confirmPassword;

//     // Constructors, getters, and setters
//     public Signup() {
//     }

//     public Signup(String username, String email, String password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//         this.confirmPassword = confirmPassword;
//     }

//     // Getters and setters
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getUsername() {
//         return username;
//     }

//     public void setUsername(String username) {
//         this.username = username;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }
//     public String getConfirmPassword() {
//         return confirmPassword;
//     }

//     public void setConfirmPassword(String confirmPassword) {
//         this.confirmPassword = confirmPassword;
//     }
// }


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "signUp")
public class Signup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String Name;

    @Column(name = "password", nullable = false)
    private String password;
    
    @Column(name = "confirmpassword", nullable = false)
    private String confirmpassword;

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
}
