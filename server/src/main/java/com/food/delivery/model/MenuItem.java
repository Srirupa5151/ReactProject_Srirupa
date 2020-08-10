package com.food.delivery.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "food_item_details")
public class MenuItem {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "item_id")
	private Integer itemId;

	@Column(name = "item_name")
	private String itemName;

	@Column(name = "item_img")
	private String itemImg;

	@Column(name = "item_price")
	private Float itemPrice;

	@Column(name = "restaurant_id")
	private Integer restaurantId;

	public MenuItem() {

	}

	public MenuItem(Integer itemId, String itemName, String itemImg, Float itemPrice, Integer restaurantId) {
		this.itemId = itemId;
		this.itemName = itemName;
		this.itemImg = itemImg;
		this.itemPrice = itemPrice;
		this.restaurantId = restaurantId;
	}

	public Integer getItemId() {
		return itemId;
	}

	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getItemImg() {
		return itemImg;
	}

	public void setItemImg(String itemImg) {
		this.itemImg = itemImg;
	}

	public Float getItemPrice() {
		return itemPrice;
	}

	public void setItemPrice(Float itemPrice) {
		this.itemPrice = itemPrice;
	}

	public Integer getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(Integer restaurantId) {
		this.restaurantId = restaurantId;
	}

	@Override
	public String toString() {
		return "MenuItem [itemId=" + itemId + ", itemName=" + itemName + ", itemImg=" + itemImg + ", itemPrice="
				+ itemPrice + ", restaurantId=" + restaurantId + "]";
	}

}
