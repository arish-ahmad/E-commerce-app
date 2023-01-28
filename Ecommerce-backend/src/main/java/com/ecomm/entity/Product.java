package com.ecomm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="products")
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="description", columnDefinition = "LONGTEXT")
	private String description;
	
	@Column(name="actual_price")
	private Long actualPrice;
	
	@Column(name="size")
	private String size;
	
	@Column(name="discount")
	private Double discount;
	
	@Column(name="category")
	private String category;
	
	@Column(name="color")
	private String color;
	
	@Column(name="img_url")
	private String imgUrl;
	
	@Column(name="seller_Id",nullable = false)
	private Long sellerId;
	
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(String productName, String description, Long actualPrice, String size, Double discount,
			String category, String color, String imgUrl, Long sellerId) {
		super();
		this.productName = productName;
		this.description = description;
		this.actualPrice = actualPrice;
		this.size = size;
		this.discount = discount;
		this.category = category;
		this.color = color;
		this.imgUrl = imgUrl;
		this.sellerId = sellerId;
	}
	public Long getId() {
		return id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getActualPrice() {
		return actualPrice;
	}
	public void setActualPrice(Long actualPrice) {
		this.actualPrice = actualPrice;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public Double getDiscount() {
		return discount;
	}
	public void setDiscount(Double discount) {
		this.discount = discount;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
	@Override
	public String toString() {
		return "Product [id=" + id + ", productName=" + productName + ", description=" + description + ", actualPrice="
				+ actualPrice + ", size=" + size + ", discount=" + discount + ", category=" + category + ", color="
				+ color + ", imgUrl=" + imgUrl + ", sellerId=" + sellerId + "]";
	}
	public Long getSellerId() {
		return sellerId;
	}
	public void setSellerId(Long sellerId) {
		this.sellerId = sellerId;
	}
	
	
	
	

}
