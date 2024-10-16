package com.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.entiy.LoginRequest;
import com.task.entiy.User;
import com.task.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:4200")
public class AuthController {

	@Autowired
	private UserService service;

	@PostMapping("/login-user")
	public User loginUser(@RequestBody LoginRequest request) {

		return service.loginUser(request);
	}

}
