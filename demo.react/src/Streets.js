import React, {Component} from "react";

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({uri: 'http://localhost:8080/graphql'});

const GET_STREETS = gql`
	      {
	        getStreets {
			    id
			    townName	
			    streetName
			    houses{
			      id
			      familyName
			      number
			    }
		  	}
	      }
	    `

function getStreets() {
	return client
	  .query({
	    query: GET_STREETS
	  });
	}

function SingleStreet(props) {
	return <div>City: {props.townName} Name: {props.streetName} Number: {props.streetId}</div>
}

class Streets extends Component {

	constructor() {
		super();
		this.state = {streets: 'No Streets Yet. Please reaload page.'};
	}

	componentDidMount() {
		getStreets().then(result => {
			const listStreetName = result.data.getStreets
			.map(street => <li><SingleStreet townName={street.townName} streetName={street.streetName} streetId={street.id}/></li>)
			this.setState({streets: <ul> {listStreetName} </ul>})
		})
	}

	render() {
		return (
			<div>{this.state.streets}</div>
		);
	}
}

export default Streets;