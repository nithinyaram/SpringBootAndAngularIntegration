package com.example.controllers;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.User;
import com.example.repositories.UserRepository;

@RestController
@CrossOrigin("*")
public class UserController {

    private final UserRepository userRepository;
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/records")
    public List<User> getUsers() {
    	System.out.println("kjnknk");
        return (List<User>) userRepository.findAll();
    }

    @PutMapping(path = "/users",consumes = MediaType.APPLICATION_JSON_VALUE)
    public User addUser(@RequestBody User user) {
        userRepository.save(user);
        System.out.println("-------------------------------------");
        return user;
    }
    
    @DeleteMapping(path="/delete/{id}")
    public void delete(@PathVariable(value="id") long id) {
    	System.out.println("Dleete "+id);
    	userRepository.deleteById(id);
    	
    }
}