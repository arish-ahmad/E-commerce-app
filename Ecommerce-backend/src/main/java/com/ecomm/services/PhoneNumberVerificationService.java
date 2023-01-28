package com.ecomm.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ecomm.entity.returnMessage;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class PhoneNumberVerificationService {
	private String ACCOUNT_SID = "AC7335a7642a7a366dfa4384c759b91a8f";
	private String ACCOUNT_AUTH_TOKEN = "94b7b9861563d1949398a170ac71a16e";
	private String TWILIO_MOBILE_NUMBER ="+13149364998";
	

	public ResponseEntity<?> generateOTP(String toMobileNumber,boolean isloginOtp){
		
		// logic to create Otp
		int randomNumber;
		
		String body;
		try {
			// generate random 6 digit number
			randomNumber = ( int )( Math.random() * 9999 );
		      if( randomNumber <= 1000 ) {
		          randomNumber = randomNumber + 1000;
		        }
		      
		      // this message send when user trying to login 
		      if(isloginOtp) {
		    	   body= randomNumber+" is your One Time Password, Valid for 5 minutes only. please do not share your OTP with anyone. Team Ecomm";
		      }
		      // this message send when user want to create new acount 
		      else {
		    	   body = "Thank you for applying for a Ecomm account. "+randomNumber+" is your One Time Password, Valid for 5 minutes only. please do not share your OTP with anyone. Team Ecomm";
		      }
		      
		      Twilio.init(ACCOUNT_SID,ACCOUNT_AUTH_TOKEN);

		        Message.creator(new PhoneNumber(toMobileNumber),
		                new PhoneNumber(TWILIO_MOBILE_NUMBER),body).create();
		        
		        return new ResponseEntity<>("Your TOTP has been sent to your verified phone number", HttpStatus.OK);
			
		}catch(Exception e) {
			String message = e.getMessage();
			return ResponseEntity.ok(new returnMessage(message));
		}
		


        

        

      

      
    }
}
