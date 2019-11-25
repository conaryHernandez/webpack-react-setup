import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const Pizza = asyncComponent(() => import( './containers/Pizza'))

class App extends Component {

	render() {
		return(
			<Fragment>
                <div>
    				<Link to="/">Users</Link>             
    				<Link to="/pizza" >Pizza</Link>             
                </div>
                    <Route path="/" exact component={Users}/>
                    <Route path="/pizza" component={Pizza}/>
			</Fragment>
		);
	}
}

export default App;
