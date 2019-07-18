import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';

import './App.css';

function App () {
	return (
		<React.Fragment>
			<Header />
			<Router>
				<div>
					<Navbar />
					<Main />
				</div>
			</Router>
			<Footer />
		</React.Fragment>
	);
}

export default App;