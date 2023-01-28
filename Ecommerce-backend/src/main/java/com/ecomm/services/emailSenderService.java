package com.ecomm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.ecomm.entity.OtpResponse;
import com.ecomm.entity.returnMessage;

@Service
public class emailSenderService {
	
	@Autowired
	private JavaMailSender mailsender;
	
	public ResponseEntity<?> sendEmail(
			String toEmail,
			String username
			) {
		
		
		int randomNumber;
		String subject;
		String body ;
		
		try {
			
			// logic to create otp
			randomNumber = ( int )( Math.random() * 9999 );

		      if( randomNumber <= 1000 ) {
		          randomNumber = randomNumber + 1000;
		        }
			
		     subject = "Please verify your email address";
		     body= "Dear "+username + "\nThank you for applying for a Ecomm account.\nYour One Time Password is : " + randomNumber;
		     
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom("ecommapp2023@gmail.com");
			message.setTo(toEmail);
			message.setText(body);
			message.setSubject(subject);
			
			mailsender.send(message);
			
			return ResponseEntity.ok(new OtpResponse(randomNumber));
		}catch(Exception e ) {
			String message = e.getMessage();
			return ResponseEntity.ok(new returnMessage(message));
		}
		
		
		
		
	}

	
}
