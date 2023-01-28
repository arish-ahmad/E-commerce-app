package com.ecomm.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="popularproducts")
public class PopularProducts {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	public Long getId() {
		return id;
	}
	private Long productId;
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public PopularProducts(Long productId) {
		super();
		this.productId = productId;
	}
	public PopularProducts() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
