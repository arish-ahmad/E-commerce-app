package com.ecomm.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.entity.User;
import com.ecomm.entity.returnMessage;
import com.ecomm.helper.JwtUtil;
import com.ecomm.repo.userRepo;
import com.ecomm.services.customUserDetailService;

@RestController
@CrossOrigin("*")
@RequestMapping("/seller")
public class sellerControler {

	@Autowired
	private customUserDetailService service;
	
	
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> adminRegister(@RequestBody User newUser) {
		return service.entitysignup(newUser);
		
	}
	
	
	@GetMapping("/get-details/{token}")
	public ResponseEntity<?> viewAdminDetails(@PathVariable String token){
		return service.entitydetails(token);
	}
}
