package com.example.Registration.resource;

import com.example.Registration.model.User;
import com.example.Registration.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
public class UserResource {
    private final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/reg")
    public ResponseEntity<User> addUser(@RequestBody com.fasterxml.jackson.databind.JsonNode payload) {
        System.out.println(payload);
        User newuser = new User(payload.get("firstName").toString(), payload.get("lastName").toString()
                , payload.get("email").toString(), payload.get("password").toString());
        userService.addUser(newuser);
        return new ResponseEntity<>(newuser, HttpStatus.CREATED);
    }
}
