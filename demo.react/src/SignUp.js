import React, {Component} from "react";
import { Button, Input, FormControl } from '@material-ui/core';

function signUp(username, password) {
  var xhr = new XMLHttpRequest()

  // get a callback when the server responds
  xhr.addEventListener('load', () => {
    // update the state of the component with the result here
    if(xhr.status === 200) {
      alert("SignUp successfull");
      window.location.href='/#/login'
  } else {
    console.log(xhr)
    alert("Error on SignUp")
  }
  })

  xhr.onerror = function () {
    alert("** An error occurred during the transaction");
  };
  // open the request with the verb and the url
  xhr.open('POST', 'http://localhost:8080/users/sign-up')
  xhr.setRequestHeader("Content-Type", "application/json");
  // send the request
  xhr.send(JSON.stringify({username: username, password:password}))
}

class SignUp extends Component {

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
    signUp(this.state.username , this.state.password);
    event.preventDefault();
  }

	render() {
		return (
      <div>
        <FormControl>
          <Input placeholder="Username" id="new-username" aria-describedby="my-helper-text" onChange={this.handleUsernameChange} value={this.state.username}/>

          <Input placeholder="Password" type="password" id="new-password" aria-describedby="my-helper-text" onChange={this.handlePasswordChange} value={this.state.password}/>
           <Button variant="contained" color="primary" disableElevation onClick={this.handleSubmit}> SignUp! </Button>

       </FormControl>
      </div>
		);
	}
}

export default SignUp;
