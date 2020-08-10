import React, { Component } from 'react';
import User from './model/User';
import axios from 'axios';
class SignIn extends Component {
    user
    constructor() {
        super();
        this.user = new User()
        this.state = {
            user: this.user,
            disabledFlag: true
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.request({
            url: "http://localhost:8082/user/signin",
            method: "post",
            auth: {
                username: this.state.user.userMobile,
                password: this.state.user.userPassword
            }
        }).then(res => {
            console.log(res.data)
        })

        this.user = new User()

        this.setState({ user: this.user })
    }
    handleMobileNumberChange(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user,
            phoneNumberEmptyError: (this.user.userMobile === "") ? true : false,
            phoneNumberError: (this.user.userMobile.length > 10 || this.user.userMobile.length < 10) ? true : false,
            disabledFlag: (this.user.userPassword === "" || this.user.userMobile === "") ? true : false
        })
    }
    handlePasswordChange(event) {
        this.user.userPassword = event.target.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,
            lengthError: (this.user.userPassword.length < 6) ? true : false,
            disabledFlag: (this.user.userPassword === "" || this.user.userMobile === "") ? true : false
        })
    }

    render() {

        return (

            <div className="container">

                <form onSubmit={(event) => this.handleSubmit(event)}>

                    <fieldset>
                        <div className="form-group">
                            <label>User Mobile</label>
                            <input type="text" className="form-control" placeholder="Enter Mobile Number" value={this.state.user.userMobile} onChange={(event) => this.handleMobileNumberChange(event)} />

                            {
                                (this.state.phoneNumberEmptyError) ? 
                                    <div className="alert alert-danger">
                                        Mobile Number is required!
                                    </div> : 
                                (this.state.phoneNumberError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Mobile Number should be 10 digits
                                    </div> : null
                                    
                            }
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" value={this.state.user.userPassword} onChange={(event) => this.handlePasswordChange(event)} />
                            {
                                (this.state.passwordError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Password is required!
                                </div> :
                                    (this.state.lengthError) ?
                                        <div className="alert alert-danger" role="alert">
                                            Password should be minimum 6 characters
                                        </div> : null
                            }

                        </div>


                        <button type="submit" className="btn btn-danger" disabled={this.state.disabledFlag} >Sign In</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default SignIn;