package com.food.delivery;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.food.delivery.model.MenuItem;
import com.food.delivery.model.Restaurant;
import com.food.delivery.model.User;
import com.food.delivery.repositories.ItemRepository;
import com.food.delivery.repositories.RestaurantRepository;
import com.food.delivery.repositories.UserRepository;

@RestController
@CrossOrigin(origins = { "*" }, methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class AppController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	RestaurantRepository restaurantRepository;

	@Autowired
	ItemRepository itemRepository;

	public User authenticate(HttpServletRequest request) {
		final String authorization = request.getHeader("Authorization");

		if (authorization == null || authorization.length() == 0)
			return null;

		if (authorization != null && authorization.toLowerCase().startsWith("basic")) {
			String base64Credentials = authorization.substring("Basic".length()).trim();
			byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
			String credentials = new String(credDecoded, StandardCharsets.UTF_8);
			final String[] values = credentials.split(":", 2);
			String userMobile = values[0];
			String userPassword = values[1];
			User user = userRepository.findByUserMobileAndUserPassword(userMobile, userPassword);
			return user;
		}
		return null;
	}

	@PostMapping("/user/signup")
	public User signUp(@RequestBody User user) {
		user = userRepository.save(user);
		return user;
	}

	@PostMapping("/user/signin")
	public User sigIn(HttpServletRequest request) {
		return authenticate(request);
	}

	@PostMapping("/restaurants/add")
	public Restaurant addRestaurant(@RequestBody Restaurant restaurant) {
		restaurant = restaurantRepository.save(restaurant);
		return restaurant;
	}

	@GetMapping("/restaurants/all")
	public List<Restaurant> getRestaurants() {
		return (List<Restaurant>) restaurantRepository.findAll();
	}

	@GetMapping("/restaurants/find/{restaurantId}")
	public Optional<Restaurant> getRestaurant(@PathVariable Integer restaurantId) {
		return restaurantRepository.findById(restaurantId);
	}
	
	@PostMapping("/menu/add")
	public MenuItem addMenuItem(@RequestBody MenuItem menuItem) {
		return itemRepository.save(menuItem);
	}

	@GetMapping("/menu/find/{restaurantId}")
	public List<MenuItem> getMenuItemsByRestaurantId(@PathVariable Integer restaurantId){
		return itemRepository.findByRestaurantId(restaurantId);
	}
}
