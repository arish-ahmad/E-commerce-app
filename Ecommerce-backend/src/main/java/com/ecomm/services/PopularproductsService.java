package com.ecomm.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ecomm.entity.PopularProducts;
import com.ecomm.entity.returnMessage;
import com.ecomm.repo.PopularProductRepo;


@Service
public class PopularproductsService {
	
	
	@Autowired
	private PopularProductRepo repo;
	
	
	public ResponseEntity<?> savePopularProduct(PopularProducts p){
		String message;
		try {
			repo.save(p);
			message  = "Product added to Dashboard";
			return ResponseEntity.ok(new returnMessage(message));
		}catch(Exception e ) {
			message = e.getMessage();
			return ResponseEntity.ok(new returnMessage(message));
		}
		
	}
	public ResponseEntity<?> deletePopularProduct(Long id){
		String message;
		try {
			
			repo.deleteById(id);
			message  = "Product remove from Dashboard";
			return ResponseEntity.ok(new returnMessage(message));
		}catch(Exception e ) {
			message = e.getMessage();
			return ResponseEntity.ok(new returnMessage(message));
		}
		
	}
	public List<PopularProducts> viewAllpopularproducts(){
		return repo.findAll();
	}

}
