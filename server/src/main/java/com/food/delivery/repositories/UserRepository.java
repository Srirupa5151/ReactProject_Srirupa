package com.food.delivery.repositories;

import org.springframework.data.repository.CrudRepository;

import com.food.delivery.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	public User findByUserMobileAndUserPassword(String userMobile, String userPassword);

}
