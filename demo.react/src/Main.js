import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Streets from "./Streets";
import Contact from "./Contact";

class Main extends Component {

	render() {
		return (
			<HashRouter>
				<div>
					<h1>BugariuVille</h1>
					<ul className="header">
						<li><NavLink to="/">Home</NavLink></li>
			            <li><NavLink to="/streets">Streets</NavLink></li>
			            <li><NavLink to="/contact">Contact</NavLink></li>
					</ul>
					<div className="content">
			            <Route exact path="/" component={Home}/>
			            <Route path="/streets" component={Streets}/>
			            <Route path="/contact" component={Contact}/>
			         </div>
				</div>
			</HashRouter>
		);
	}

}

export default Main;