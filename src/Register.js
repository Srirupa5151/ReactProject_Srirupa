import React, { Component } from 'react';
import User from './model/User'
import axios from 'axios';

class Register extends Component {

    user: Users


    componentDidMount() {
        this.user = new Users()
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
        this.user = new Users()
        this.state = {
            user: this.user,
            nameError: false,
            emailError: false,
            lengthError: false,
            disabledFlag: true,
            addressError: false,
            matchError: false,
            phoneError: false,
            phoneConditionError: false,
            charCondition: false,
            successFlag: false
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.user === undefined)
            axios.post("http://localhost:8082/add", this.state.user)
                .then(response => {
                    this.setState({
                        successFlag: (response.status === 200) ? true : false
                    })
                    this.user = new Users()
                    this.setState({ user: this.user })
                })

        else {
            axios.put("http://localhost:8082/save", this.state.user)
                .then(response => {
                    this.setState({
                        successFlag: (response.status === 200) ? true : false
                    })
                    this.user = new Users()
                    this.setState({ user: this.user })
                })
        }
    }

    handleEmailChange(event) {
        this.user.userEmail = event.target.value
        this.setState({
            user: this.user,
            emailError: (this.user.userEmail === "") ? true : false,
        })
        this.buttonFlag()
    }

    handleNameChange(event) {
        this.user.userName = event.target.value
        this.setState({
            user: this.user,
            nameError: (this.user.userName === "") ? true : false
        })
        this.buttonFlag()
    }
    handlePasswordChange(event) {
        this.user.userPassword = event.target.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,
            lengthError: (this.user.userPassword.length < 6) ? true : false,

        })
        this.buttonFlag()
    }


    handleAddressChange(event) {
        this.user.userAddress = event.target.value
        this.setState({
            user: this.user,
            addressError: (this.user.userAddress === "") ? true : false
        })
        this.buttonFlag()
    }

    handlePhoneNumberChange(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user,
            phoneError: (this.user.userMobile === "") ? true : false,
            phoneConditionError: (this.user.userMobile.length !== 10) ? true : false,
            charCondition: (isNaN(this.user.userMobile)) ? true : false
        })
        this.buttonFlag()
    }


    buttonFlag() {
        this.setState({
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.confirmPassword === "" || this.user.userMobile === "" || this.user.userAddress === "") ? true : false
        })
    }




    render() {
        return (
            <div className="container">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <h3>Signup</h3>

                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name" value={this.state.user.userName} onChange={(event) => this.handleNameChange(event)} />
                        {
                            (this.state.nameError) ?
                                <div className="alert alert-danger" role="alert">
                                    Name can't be empty
 </div> : null
                        }
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email" value={this.state.user.userEmail} onChange={(event) => this.handleEmailChange(event)} />
                        {
                            (this.state.emailError) ?
                                <div className="alert alert-danger" role="alert">
                                    Email can't be empty
                             </div> : null
                        }


                    </div>


                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" value={this.state.user.userPassword} onChange={(event) => this.handlePasswordChange(event)} />
                        {
                            (this.state.passwordError) ?
                                <div className="alert alert-danger" role="alert">
                                    Password can't be empty
 </div> : null
                        }
                        {
                            (this.state.lengthError) ?
                                <div className="alert alert-danger" role="alert">
                                    Password should contain atleast 6 characters
 </div> : null

                        }


                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" />
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" className="form-control" placeholder="Enter your Phone Number" value={this.state.user.userMobile} onChange={(event) => this.handlePhoneNumberChange(event)} />
                        {
                            (this.state.phonenumberError) ?
                                <div className="alert alert-danger" role="alert">
                                    phonenumber cannot be empty
  </div> : null
                        }
                        {
                            (this.state.phoneConditionError) ?
                                <div className="alert alert-danger" role="alert">
                                    length shoud be 10
  </div> : null
                        }
                        {
                            (this.state.charCondition) ?
                                <div className="alert alert-danger" role="alert">
                                    should be number
  </div> : null
                        }

                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control" placeholder="Enter address" value={this.state.user.userAddress} onChange={(event) => this.handleAddressChange(event)} rows="3" />
                        {
                            (this.state.addressError) ?
                                <div className="alert alert-danger" role="alert">
                                    Address can't be empty
                                     </div> : null
                        }
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Signup</button>

                </form>



            </div>
        );
    }
}
export default Register;