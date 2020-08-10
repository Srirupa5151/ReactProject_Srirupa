package com.food.delivery.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "restaurant_details")
public class Restaurant {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "restaurant_id")
	private Integer restaurantId;

	@Column(name = "restaurant_name")
	private String restaurantName;

	@Column(name = "restaurant_speciality")
	private String restaurantSpeciality;

	@Column(name = "restaurant_img")
	private String restaurantImg;

	@Column(name = "restaurant_address")
	private String restaurantAddress;

	public Restaurant() {

	}

	public Restaurant(Integer restaurantId, String restaurantName, String restaurantSpeciality, String restaurantImg,
			String restaurantAddress) {
		this.restaurantId = restaurantId;
		this.restaurantName = restaurantName;
		this.restaurantSpeciality = restaurantSpeciality;
		this.restaurantImg = restaurantImg;
		this.restaurantAddress = restaurantAddress;
	}

	public Integer getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(Integer restaurantId) {
		this.restaurantId = restaurantId;
	}

	public String getRestaurantName() {
		return restaurantName;
	}

	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}

	public String getRestaurantSpeciality() {
		return restaurantSpeciality;
	}

	public void setRestaurantSpeciality(String restaurantSpeciality) {
		this.restaurantSpeciality = restaurantSpeciality;
	}

	public String getRestaurantImg() {
		return restaurantImg;
	}

	public void setRestaurantImg(String restaurantImg) {
		this.restaurantImg = restaurantImg;
	}

	public String getRestaurantAddress() {
		return restaurantAddress;
	}

	public void setRestaurantAddress(String restaurantAddress) {
		this.restaurantAddress = restaurantAddress;
	}

	@Override
	public String toString() {
		return "Restaurant [restaurantId=" + restaurantId + ", restaurantName=" + restaurantName
				+ ", restaurantSpeciality=" + restaurantSpeciality + ", restaurantImg=" + restaurantImg
				+ ", restaurantAddress=" + restaurantAddress + "]";
	}

}
