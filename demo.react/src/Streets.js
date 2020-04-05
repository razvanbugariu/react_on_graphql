import React, {Component} from "react";

import ApolloClient from "apollo-boost";
import { List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import gql from "graphql-tag";

const client = new ApolloClient({uri: 'http://localhost:8080/graphql'});

const GET_STREETS = gql`
	      {
	        getStreets {
			    id
			    townName
			    streetName
		  	}
	      }
	    `

function getStreets() {
	return client
	  .query({
	    query: GET_STREETS
	  });
	}

class Streets extends Component {

	constructor() {
		super();
			this.state = {streets: []};
	}

	componentDidMount() {
		getStreets().then( (result) => this.setState({streets: result.data.getStreets}))
	}

	render() {
		return (
			<List>
				{this.state.streets.map( (street) => <ListItem key={street.id}>
						<ListItemIcon>
			       <LocationCityIcon />
			     </ListItemIcon>
					<ListItemText> {street.streetName} Street, {street.townName} </ListItemText>
				</ListItem>)}
			</List>
		);
	}
}

export default Streets;
