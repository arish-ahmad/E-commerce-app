package com.ecomm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ecomm.entity.PopularProducts;
import com.ecomm.entity.Product;


@Repository
public interface PopularProductRepo extends JpaRepository<PopularProducts, Long>{
	 
	
	
	/*@Query(value = "SELECT * FROM Products p WHERE p.seller_id=?1", nativeQuery = true)
	public ResponseEntity findProductsBySellerId(Long id);*/
}
