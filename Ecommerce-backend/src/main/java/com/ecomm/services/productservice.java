package com.ecomm.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ecomm.entity.Product;
import com.ecomm.entity.returnMessage;
import com.ecomm.repo.productRepo;


@Service
public class productservice {
	
	@Autowired
	private productRepo repo;
	
	public ResponseEntity<?> savepro(Product p ) {
		String message;
		try {
			repo.save(p);
			message  = "Product added Successfully with id "+p.getId();
			return ResponseEntity.ok(new returnMessage(message));
		}catch(Exception e ) {
			message = e.getMessage();
			return ResponseEntity.ok(new returnMessage(message));
		}
		
		
	}
	public Optional<Product> productDetailsbyId(Long id){
		
		try {
			Optional<Product> pr = repo.findById(id);
			return pr;
		}catch(Exception e) {
			return Optional.empty();
			
		}
			
	}
	
	// delete product by product id 
	public ResponseEntity<?> deletepro(Long id ) {
		
		String message;
		try {
			repo.deleteById(id);
			message  = "Product Delete Successfully with id "+id;
			return ResponseEntity.ok(new returnMessage(message));
		}catch(Exception e ) {
			message = e.getMessage();
			return ResponseEntity.ok(new returnMessage(message));
		}
		
	}
	// seller products by selller id
	public List<Product> viewproducts(Long id){
		List<Product> pr = repo.findProductsBySellerId(id);
		
		return pr;
		
	}
	
	// all products
	public List<Product> viewAll(){
		return repo.findAll();
	}
	
	//Search products
	public List<Product> searchpro(String key) {
		String keyword = "%"+key+"%";
		return repo.Searchbykeywrords(keyword);
	}
	

}
