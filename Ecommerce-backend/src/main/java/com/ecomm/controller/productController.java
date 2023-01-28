package com.ecomm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.entity.PopularProducts;
import com.ecomm.entity.Product;
import com.ecomm.repo.PopularProductRepo;
import com.ecomm.services.PopularproductsService;
import com.ecomm.services.productservice;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class productController {
	
	
	@Autowired
	private productservice service;
	
	@Autowired
	private PopularproductsService popularProductService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addproduct(@RequestBody Product pr) {
		
		return service.savepro(pr);
	}
	
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<?> deleteproduct(@PathVariable Long id) {
		
		
		return service.deletepro(id);
		
	}
	
	@GetMapping("/seller-products/{id}")
	public List<Product> viewproducts(@PathVariable Long id){
		return service.viewproducts(id);
		
	}
	@GetMapping("/all-products")
	public List<Product> viewallproducts(){
		
		return service.viewAll();
		
		
	}
	
	@GetMapping("/product-details/{productid}")
	public Optional <Product> viewproduct(@PathVariable Long productid){
		return service.productDetailsbyId(productid);
	}
	
	@PostMapping("/add-to-dashboard")
	public ResponseEntity<?> addpopularpro(@RequestBody PopularProducts pr) {
		
		return popularProductService.savePopularProduct(pr);
	}
	
	@GetMapping("/remove-from-dashboard/{id}")
	public ResponseEntity<?> removepopularpro(@PathVariable Long id) {
		
		
		return popularProductService.deletePopularProduct(id);
		
	}
	
	@GetMapping("/get-all-popular-products")
	public List<PopularProducts> viewallpopularpro(){
		return popularProductService.viewAllpopularproducts();
		
	}
	@GetMapping("/search/{key}")
	public List<Product> searchproducts(@PathVariable String key){
		
			return service.searchpro(key);
		
	}
	
	
	
}
