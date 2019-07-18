import React from 'react';
import './Header.css';
import ContactListMini from './ContactListMini';

function Header () {
	return (
	<header>
		<ContactListMini />
		<h1>GEOSUPPORT</h1>
	</header>
	);
}

export default Header;