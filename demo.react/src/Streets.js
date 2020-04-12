import React, {Component} from "react";
import ApolloClient from "apollo-boost";
import { List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import gql from "graphql-tag";

const client = new ApolloClient({
	uri: 'http://localhost:8080/graphql',
	request: (operation) => {
	  const token = localStorage.getItem('authorizationHeader')
	  operation.setContext({
		headers: {
		  Authorization: token ? `${token}` : ''
		}
	  })
	}
  })

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
		this.state = {streets: [], errorMessage:"", hideError:true};
		if(localStorage.getItem('authorizationHeader') === null) {
			this.state = {streets: [], errorMessage:"Please authenticate before any action.", hideError:false};
		}
	}

	componentDidMount() {
		if(localStorage.getItem('authorizationHeader') != null) {
			getStreets().then( (result) => this.setState({streets: result.data.getStreets})).catch(error => this.setState({hideError: false, errorMessage:"Something went wrong, try again later!"}))
		}
	}

	render() {
		return (
			<div>
				<List>
					{this.state.streets.map( (street) => <ListItem key={street.id}>
							<ListItemIcon>
					<LocationCityIcon />
					</ListItemIcon>
						<ListItemText> {street.streetName} Street, {street.townName} </ListItemText>
					</ListItem>)}
				</List>
				<h1 hidden={this.state.hideError}>{this.state.errorMessage}</h1>
			</div>
		);
	}
}

export default Streets;
