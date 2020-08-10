import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Restaurants from './Restaurants';
import RestaurantItems from './RestaurantItems';
import cart from'./cart';
import home from './home';

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                    <NavLink className="navbar-brand" to="/home" activeClassName="active">Dine At Home</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">

                                <NavLink className="nav-link" to="/Restaurants" activeClassName="active"><span><i class="fas fa-utensils mr-1"></i></span>Restaurants</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup" activeClassName="active"><span><i class="fas fa-user-plus mr-1"></i></span>SignUp</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin" activeClassName="active"><span><i class="fas fa-sign-in-alt mr-1"></i></span>SignIn</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart" activeClassName="active"><span><i class="fas fa-cart-arrow-down"></i></span>Cart</NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
                <Route exact path="/Restaurants" component={Restaurants} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/restaurants/viewmenu/:restaurantId" component={RestaurantItems} />
                <Route exact path="/cart" component={cart} />
                <Route exact path="/home" component={home} />

            </Router>
        );
    }
}

export default Navbar;



