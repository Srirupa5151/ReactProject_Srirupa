package com.food.delivery.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.food.delivery.model.MenuItem;

public interface ItemRepository extends CrudRepository<MenuItem, Integer> {
	List<MenuItem> findByRestaurantId(Integer restaurantId);
	
}
