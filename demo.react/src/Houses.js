import React, {Component} from "react";
import { List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

class Houses extends Component {

  constructor() {
    super();
    this.state = {houses: [],
                  hideError: true,
                  authenticated:true,
                  errorMessage: ""};
    if(localStorage.getItem('authorizationHeader') === null) {
      this.state = {houses: [],
                    hideError: false,
                    authenticated:false,
                    errorMessage: "You are not authenticated!"};
                }
  }

  componentDidMount() {
    if(this.state.authenticated) {
      var xhr = new XMLHttpRequest()
      // get a callback when the server responds
      xhr.addEventListener('load', () => {
        // update the state of the component with the result here
        if( xhr.status === 401) {
            this.setState({hideError: false, errorMessage: "Not authenticated"});
        } else if(xhr.status === 200) {
        this.setState({houses: JSON.parse(xhr.responseText)})
      } else {  
        this.setState({hideError: false, errorMessage: "Not recognized header from server."})
      }
      })

      xhr.onerror = function () {
        alert("** An error occurred during the transaction");
      };
      // open the request with the verb and the url
      xhr.open('GET', 'http://localhost:8080/houses');
      xhr.setRequestHeader("Authorization", localStorage.getItem("authorizationHeader"));
      // send the request
      xhr.send()
    }
  }

	render() {
		return (
      <div id="houses-component">
        <List>
  				{this.state.houses.map( (house) => <ListItem key={house.id}>
  						<ListItemIcon>
  			       <HomeIcon />
  			     </ListItemIcon>
  					<ListItemText> {house.familyName} on {house.street.streetName} Street </ListItemText>
  				</ListItem>)}
  			</List>
        <h1 hidden={this.state.hideError}>{this.state.errorMessage}</h1>
      </div>
		);
	}
}

export default Houses;
