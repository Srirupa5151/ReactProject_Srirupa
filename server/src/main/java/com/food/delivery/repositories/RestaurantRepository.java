package com.food.delivery.repositories;

import org.springframework.data.repository.CrudRepository;

import com.food.delivery.model.Restaurant;

public interface RestaurantRepository extends CrudRepository<Restaurant, Integer> {

	

}
