import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Prices from './Prices';
import Posts from './Posts';
import Contacts from './Contacts';

function Main ({ match }) {
	return (
		<main>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/projects' component={Projects} />
				<Route path='/prices' component={Prices} />
				<Route path='/posts' component={Posts} />
				<Route path='/contacts' component={Contacts} />
			</Switch>
		</main>
	);
}

export default Main;