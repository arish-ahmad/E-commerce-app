package com.ecomm.controller;

import com.ecomm.entity.mobileOtpRequest;
import com.ecomm.services.PhoneNumberVerificationService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;





@RestController
public class PhoneNumberVerificationController {
	
	@Autowired 
	private  PhoneNumberVerificationService service; 

    @PostMapping(value = "/generateOTP")
    public ResponseEntity<?> sendOTp(@RequestBody  mobileOtpRequest otpBody){
		return service.generateOTP(otpBody.getMobileNumber(),otpBody.isLoginOtp());
    	
    }
}
