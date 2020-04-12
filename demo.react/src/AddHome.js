import React, {Component} from "react";
import { Button, Input, FormControl, FormHelperText, Select, MenuItem } from '@material-ui/core';
import ApolloClient from "apollo-boost";
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

function saveHouse(number, familyName, streetId) {
	client.mutate({
	variables: { number: number, familyName: familyName, streetId: streetId },
	mutation: gql`
		mutation AddHouse($number: Int, $familyName: String, $streetId: Int) {
			saveHouse(number: $number, familyName: $familyName, streetId: $streetId) {
				id
				familyName
				street {
					streetName
					townName
				}
			}
		}

	`
})
.then(result => { alert('House saved!') })
.catch(error => { console.log(error) });
}

class AddHome extends Component {

	constructor() {
		super()
		this.state = {familyName: '',
						number: 0,
						streets: [],
						selectedStreet:'',
						hideError:true,
						isAuthenticated:true,
						errorMessage:''};

		if(localStorage.getItem('authorizationHeader') === null) {
			this.state = {familyName: '',
							number: 0,
							streets: [],
							selectedStreet:'',
							hideError:false,
							isAuthenticated:false,
							errorMessage:'You are not authenticated!'}			
		}	

		// This binding is necessary to make `this` work in the callback
		this.handleChangeFamilyName = this.handleChangeFamilyName.bind(this);
		this.handleChangeNumber = this.handleChangeNumber.bind(this);
		this.handleChangeStreet = this.handleChangeStreet.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if(this.state.isAuthenticated) {
			getStreets().then( result => {console.log(result.data.getStreets); this.setState({streets: result.data.getStreets}) });
		}
	}

	handleChangeFamilyName(event) {
		this.setState({familyName: event.target.value});
  }

	handleChangeNumber(event) {
		this.setState({number: event.target.value});
	}

	handleChangeStreet(event) {
		console.log("Setting value of selectedStreet to :" )
		console.log(event.target.value)
		this.setState({selectedStreet: event.target.value});
	}

 handleSubmit(event) {
		saveHouse(this.state.number , this.state.familyName, this.state.selectedStreet.id);
		event.preventDefault();
 }

	render() {
		return (
			<div>
				<FormControl disabled={!this.state.hideError}>
				<Input placeholder="Family Name" id="family-name-input" aria-describedby="my-helper-text" onChange={this.handleChangeFamilyName} value={this.state.familyName}/>
				<FormHelperText id="my-helper-text" color="secondary">Will be persisted in our database for this house.</FormHelperText>

					<Input placeholder="House Number" type="number" id="number-input" aria-describedby="my-helper-text" onChange={this.handleChangeNumber} value={this.state.number}/>
					<FormHelperText id="my-helper-text" color="secondary">Number assigned to the house.</FormHelperText>

					<Select value={this.state.selectedStreet} onChange={this.handleChangeStreet} >
						{this.state.streets.map((street) => <MenuItem value={street} key={street.id}>{street.streetName}</MenuItem>)}
					</Select>
					<FormHelperText id="my-helper-text" color="secondary">Select street.</FormHelperText>

					<Button variant="contained" color="primary" disableElevation onClick={this.handleSubmit}> Save house</Button>
				</FormControl>
				<h1 hidden={this.state.hideError}>{this.state.errorMessage}</h1>
			</div>

		);
	}
}

export default AddHome;
