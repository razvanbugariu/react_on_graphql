import React, {Component} from "react";
import { Button, Input, FormControl, Link } from '@material-ui/core';
import {authenticationService} from './AuthenticationService'

function login(username, password) {
    authenticationService.login(username, password);
}

class Login extends Component {

  constructor() {
    super();
    this.state = {
                  username: "",
                  password: ""
                };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
		this.setState({username: event.target.value});
  }

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}

  handleSubmit(event) {
    login(this.state.username , this.state.password);
    event.preventDefault();
  }

	render() {
    return (
      <FormControl>
        <Input placeholder="Username" id="login-username" aria-describedby="my-helper-text" onChange={this.handleUsernameChange} value={this.state.username}/>

        <Input placeholder="Password" type="password" id="login-password" aria-describedby="my-helper-text" onChange={this.handlePasswordChange} value={this.state.password}/>
				<Button variant="contained" color="primary" disableElevation onClick={this.handleSubmit}> Login </Button>
        <Link
          color="textPrimary"
          href="/#/sign-up"
          aria-current="page">
          Click here to sign-up !!!
        </Link>
	  </FormControl>
    );
	}
}

export default Login;
