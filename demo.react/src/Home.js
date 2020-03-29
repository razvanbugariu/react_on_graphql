import React, {Component} from "react";

class Home extends Component {
	render() {
		return (
			<div>
		        <h2>HELLO</h2>
		        <p>This is a demo app using ReactJS for FrontEnd and SpringBoot with GraphQL on backend</p>
		        <p>There will be data fetched from a H2 DB using GraphQL queries. 
		        Also, we will insert some data into H2 DB using GraphQL mutations</p>
		 
		        <p>Bugariu welcomes you to BugariuVille.</p>
	      </div>
		);
	}
}

export default Home;