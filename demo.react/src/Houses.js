import React, {Component} from "react";
import { List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

class Houses extends Component {

  constructor() {
    super();
    this.state = {houses: []};
  }

  componentDidMount() {
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      this.setState({houses: JSON.parse(xhr.responseText)})
    })
    // open the request with the verb and the url
    xhr.open('GET', 'http://localhost:8080/houses')
    // send the request
    xhr.send()
  }

	render() {
		return (
      <List>
				{this.state.houses.map( (house) => <ListItem key={house.id}>
						<ListItemIcon>
			       <HomeIcon />
			     </ListItemIcon>
					<ListItemText> {house.familyName} on {house.street.streetName} Street </ListItemText>
				</ListItem>)}
			</List>
		);
	}
}

export default Houses;
