package com.ecomm.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.ecomm.entity.User;
import com.ecomm.entity.CustomUserDetails;
import com.ecomm.entity.returnMessage;
import com.ecomm.helper.JwtUtil;
import com.ecomm.repo.userRepo;





@Service
public class customUserDetailService  implements UserDetailsService {
	
	
   @Autowired
   private userRepo repo;
   
   @Autowired
	private JwtUtil jwtutil;
	
   
	

	@Override
	public UserDetails loadUserByUsername(String username)  throws UsernameNotFoundException{
		
		 User admin = this.repo.findByUsername(username);
		
		if (admin==null) {
			throw new UsernameNotFoundException("user not found");
		}else {
			return new CustomUserDetails(admin);
		}
		
		
		
	}
	
	public ResponseEntity<?> entitysignup(User newUser) {
		String message;
		try {
			repo.save(newUser);
			message ="Account created sucessfully with id "+newUser.getId();
			return ResponseEntity.ok(new returnMessage(message));
		}catch(Exception e) {
			message = e.getMessage();
			return ResponseEntity.ok(new returnMessage(message));
		}
		
		
	}
	
	public ResponseEntity<?> entitydetails( String token){
		String message;
		String username = this.jwtutil.extractUsername(token);
		try {
			User u = repo.findByUsername(username);
			System.out.println(u.toString());
			
			return ResponseEntity.ok(u);
		}catch(Exception e) {
			message = e.getMessage();
			return ResponseEntity.ok(new returnMessage(message)) ;
			
		}
	}
	
}
