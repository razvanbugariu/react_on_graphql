import React, {Component} from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {authenticationService} from './AuthenticationService'

class Logout extends Component {
    constructor() {
        super();
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        authenticationService.logout();
    }

	render() {
		return (
			<div>
                <ExitToAppIcon onClick={this.handleLogOut}/>
  		    </div>
		);
	}
}

export default Logout;
