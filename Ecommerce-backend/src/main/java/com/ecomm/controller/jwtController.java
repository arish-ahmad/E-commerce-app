package com.ecomm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.entity.jwtRequest;
import com.ecomm.entity.jwtResponse;
import com.ecomm.helper.JwtUtil;
import com.ecomm.repo.userRepo;
import com.ecomm.services.customUserDetailService;



@RestController

@CrossOrigin("*")
public class jwtController {
	
	@Autowired
	private AuthenticationManager authenticationmanager;
	
	@Autowired
	private customUserDetailService customuserdetailservice;
	
	@Autowired
	private userRepo repo;
	
	@Autowired
	private JwtUtil jwtutil;
	
	@RequestMapping(value="/token",method=RequestMethod.POST)
	public ResponseEntity<?> generateToken(@RequestBody jwtRequest jwtRequest) throws Exception{
		
		try {
			this.authenticationmanager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword()));
			
		}catch(UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("Bad Credentials");
		}
		
		
		UserDetails userDetails = this.customuserdetailservice.loadUserByUsername(jwtRequest.getUsername());
		System.out.println(userDetails.toString());
		String token = this.jwtutil.generateToken(userDetails);
		System.out.println("token : "+token);
		
		String role = repo.findRole(jwtRequest.getUsername(), jwtRequest.getPassword());
		return ResponseEntity.ok(new jwtResponse(token,role));
		
		
		
	}

}
