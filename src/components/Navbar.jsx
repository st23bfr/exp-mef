import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar () {
	return (
		<nav className="Navbar">
			<ul>
				<NavbarListItem
					to={'/'}
					title={'Главная'}
					iconName={'glyphicon-home'}
				/>
				<NavbarListItem
					to={'/about'}
					title={'О нас'}
					iconName={'glyphicon-user'}
				/>
				<NavbarListItem
					to={'/projects'}
					title={'Проекты'}
					iconName={'glyphicon-list-alt'}
				/>
				<NavbarListItem
					to={'/prices'}
					title={'Цены'}
					iconName={'glyphicon-folder-open'}
				/>
				<NavbarListItem
					to={'/posts'}
					title={'Статьи'}
					iconName={'glyphicon-pencil'}
				/>
				<NavbarListItem
					to={'/contacts'}
					title={'Контакты'}
					iconName={'glyphicon-envelope'}
				/>
			</ul>
		</nav>
	);
}

function NavbarListItem ({to, iconName, title} = this.props) {
	return (
		<li>
			<Link to={to}>
				<div>
					<span className={`glyphicon ${iconName}`} />
					{' '}
					{title}
				</div>
			</Link>
		</li>
	);
}

export default Navbar;