package com.example.Registration.service;

import com.example.Registration.model.User;
import com.example.Registration.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userrepository;

    @Autowired
    public UserService(UserRepository userrepository) {
        this.userrepository = userrepository;
    }

    public User addUser(User user) {
      //  User testuser = userrepository.findbyEmail("email");
       // if(testuser.getId()==null){
            return userrepository.save(user);
        //} else {
          //  return testuser;
       // }
    }
}
