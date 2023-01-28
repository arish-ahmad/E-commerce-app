package com.ecomm.entity;

public class emailOtpRequest {
	
	private String email;
	private String username;
	public emailOtpRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public emailOtpRequest(String email, String username) {
		super();
		this.email = email;
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

}
