import { FETCH_RESTAURANTS, FETCH_RESTAURANT_BY_ID,FETCH_MENU_ITEMS_BY_ID ,SIGNIN,SIGNUP} from './types';
import axios from 'axios';

export const fetchRestaurants = () => dispatch => {

  axios.get("http://localhost:8082/restaurants/all")
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: res.data
      })
    })
}; 
export const fetchRestaurantById = (restaurantId) => dispatch => {

  axios.get("http://localhost:8082/restaurants/find/"+restaurantId)
    .then(res => {
      console.log(res)
      dispatch({
        type: FETCH_RESTAURANT_BY_ID,
        payload: res.data
      })
    })
}; 
export const fetchMenuItemsById = (restaurantId) => dispatch => {

  axios.get("http://localhost:8082/menu/find/" + restaurantId)
    .then(res => {
      dispatch({
        type: FETCH_MENU_ITEMS_BY_ID,
        payload: res.data
      })
    })
};
export const signupData = (signup) => dispatch => {
 
  axios.get("http://localhost:8082/user/signup",signup)
    .then(user => {
      dispatch({
        type: SIGNUP,
        payload: user.data
      })
      console.log(user.data)
    })
};
export const signinData = (mobile,password) => dispatch => {
 
  axios.request({
    url:"http://localhost:8082/user/signin",
  method:"post",
  auth:{
    username:mobile,
    password:password
  }
 
  })
    .then(login => {
      console.log(login.data)
      dispatch({
        type: SIGNIN,
        payload: login.data
      })
    })
};