package com.ecomm.entity;

public class jwtResponse {

	String token;
	String role;

	public jwtResponse(String token, String role) {
		super();
		this.token = token;
		this.role = role;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public jwtResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
}

	
