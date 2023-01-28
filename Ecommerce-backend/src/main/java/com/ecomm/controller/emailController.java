package com.ecomm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.entity.emailOtpRequest;
import com.ecomm.services.emailSenderService;

@RestController
@CrossOrigin("*")
public class emailController {

	@Autowired
	private emailSenderService emailservice;
	
	@PostMapping("/email-verification")
	public ResponseEntity<?> otpsender(@RequestBody emailOtpRequest otpresponse){
		
		
		
		return emailservice.sendEmail(otpresponse.getEmail(), otpresponse.getUsername());
		
	}
}
