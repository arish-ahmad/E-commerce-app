package com.ecomm.entity;

public class mobileOtpRequest {
	private String mobileNumber;
	private boolean loginOtp;
	public mobileOtpRequest(String mobileNumber, boolean loginOtp) {
		super();
		this.mobileNumber = mobileNumber;
		this.loginOtp = loginOtp;
	}
	public mobileOtpRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public boolean isLoginOtp() {
		return loginOtp;
	}
	public void setLoginOtp(boolean loginOtp) {
		this.loginOtp = loginOtp;
	}

}
