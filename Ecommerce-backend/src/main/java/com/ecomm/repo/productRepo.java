package com.ecomm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ecomm.entity.Product;

@Repository
public interface productRepo extends JpaRepository<Product, Long>{
	
	//@Query("Select product from products where product.seller_token=?1")
	@Query(value = "SELECT * FROM Products p WHERE p.seller_id=?1", nativeQuery = true)
	public List<Product> findProductsBySellerId(Long id);

	@Query(value = "SELECT * FROM Products p WHERE p.product_name like ?1 or p.category like ?1", nativeQuery = true) 
	public List<Product> Searchbykeywrords(String key);

}
