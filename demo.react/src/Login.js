import React, {Component} from "react";
import { Button, Input, FormControl, Link } from '@material-ui/core';

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:8080/login`, requestOptions)
        .then(response => {
            console.log(response);
            localStorage.setItem("currentUsername", username);
            localStorage.setItem("authorizationHeader", response.headers.get('authorization'));
            window.location.href='/#/contact'
        });
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
				    Click here to registrate !!!
					</Link>
	  </FormControl>
    );
	}
}

export default Login;
