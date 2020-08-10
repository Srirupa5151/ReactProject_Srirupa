import React, { Component } from 'react';
import User from './model/User';
import axios from 'axios';

class SignUp extends Component {

  
    passwordRef
    confirmPasswordRef
    componentDidMount() {
        this.user = new User()
    }
    componentDidUpdate() {
        if (this.props.user !== this.state.user && this.props.user !== undefined) {
            this.user = this.props.user
            this.setState({
                user: this.props.user
            })
        }
    }

    constructor() {
        super();
        this.user = new User()
        this.state = {
            user: this.user,
            nameError: false,
            emailError: false,
            passwordError: false,
            mobileError: false,
            addressError: false,
            pincodeError: false,
            passwordLengthError: false,
            confirmPasswordError: false,
            mobileLengthError: false,
            disabledFlag: true,
            displayFlag: true
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.props.user === undefined)
            axios.post("http://localhost:8082/user/signup", this.state.user)
                .then(response => {
                    console.log(response)
                    this.setState({
                        successFlag: (response.status === 200) ? true : false
                    })
                    this.user = new User()
                    this.setState({ user: this.user })
                })
        this.setState({
            displayflag: true
        })
    }
    handleUserNameChange(event) {
        this.user.userName = event.target.value
        this.setState({
            user: this.user,
            userNameError: (this.user.userName === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false
        })
    }

    handleEmailChange(event) {
        this.user.userEmail = event.target.value
        this.setState({
            user: this.user,
            userEmailError: (this.user.userEmail === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false
        })
    }

    handlePasswordChange() {
        this.user.userPassword = this.passwordRef.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,
            passwordLengthError: (this.user.userPassword.length < 6) ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false
        })
    }

    handleConfirmPasswordChange() {
        this.user.confirmPassword = this.confirmPasswordRef.value
        this.setState({
            user: this.user,
            confirmPasswordError: (this.user.confirmPassword !== this.user.userPassword) ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false
           
        })
    }

    handleMobileChange(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user,
            mobileError: (this.user.userMobile === "") ? true : false,
            mobileLengthError: (this.user.userMobile.length !== 10) ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false
        })
    }

    handleAddressChange(event) {
        this.user.userAddress = event.target.value
        this.setState({
            user: this.user,
            addressError: (this.user.userAddress === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false
        })
    }


    handlePincodeChange(event) {
        this.user.userPincode = event.target.value
        this.setState({
            user: this.user,
            pincodeError: (this.user.userPincode === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.userMobile === "" || this.user.userAddress === "" || this.user.userPincode === "") ? true : false
        })
    }

    signUpSubmit(event) {

        console.log("Form Submitted!")
        this.setState({
            displayFlag: false
        })
        event.preventDefault()
        
    }

    render() {
        return (
            <div className="container">
                

                <form onSubmit={(event) => this.handleSubmit(event)}>
              
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter UserName" value={this.state.user.userName} onChange={(event) => this.handleUserNameChange(event)} />
                        {
                            (this.state.userNameError) ?
                                <div className="alert alert-danger" role="alert">
                                    UserName is Required!
                </div> : null
                        }
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email Address" value={this.state.user.userEmail} onChange={(event) => this.handleEmailChange(event)} />
                        {
                            (this.state.userEmailError) ?
                                <div className="alert alert-danger" role="alert">
                                    Email is Required!
                </div> : null
                        }
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" ref={(input) => this.passwordRef = input} value={this.state.user.userpassword} onChange={() => this.handlePasswordChange()} />
                        {
                            (this.state.passwordError) ?
                                <div className="alert alert-danger" role="alert">
                                    Password is Required!
                </div> : (this.state.passwordLengthError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Password Length Should be greter than 6 is Required!
                </div> : null
                        }
                    </div>

                   

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter Address" value={this.state.user.userAddress} onChange={(event) => this.handleAddressChange(event)} />
                        {
                            (this.state.addressError) ?
                                <div className="alert alert-danger" role="alert">
                                    Address is Required!
                </div> : null
                        }
                    </div>

                    <div className="form-group">
                        <label>Pincode</label>
                        <input type="text" className="form-control" placeholder="Enter Pincode" value={this.state.user.userPincode} onChange={(event) => this.handlePincodeChange(event)} />
                        {
                            (this.state.pincodeError) ?
                                <div className="alert alert-danger" role="alert">
                                    Pincode is Required!
                </div> : null
                        }
                    </div>

                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="text" className="form-control" placeholder="Enter Mobile Number" value={this.state.user.userMobile} onChange={(event) => this.handleMobileChange(event)} />
                        {
                            (this.state.mobileError) ?
                                <div className="alert alert-danger" role="alert">
                                    Mobile Number is Required!
                </div> : (this.state.mobileLengthError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Mobile Number Length Should be 10!
                </div> : null
                        }
                    </div>

                    <div>
                        <button type="submit" className="btn btn-danger my-3" disabled={this.state.disabledFlag}>Sign Up</button>
                    </div>
                </form>

                {
                    (this.state.displayFlag === false) ?
                        alert('User ' + this.state.user.userName + ' registered Sucessfully') : null
                }

            </div>

        );
    }
}

export default SignUp;