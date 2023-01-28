package com.ecomm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.entity.User;
import com.ecomm.entity.returnMessage;
import com.ecomm.repo.userRepo;

@RestController
@CrossOrigin
public class homeController {
	
	@Autowired
	private userRepo service;
	@RequestMapping("/welcome")
	public ResponseEntity<?> welcome() {
		String msg = "This is secure page, Welcome to dashboard";
		return ResponseEntity.ok( new returnMessage(msg));
	}
	


}
