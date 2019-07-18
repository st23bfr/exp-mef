import React from 'react';

import CircleContainer from './CircleContainer';

import './HomeServices.css';

function HomeServices () {
	return (
		<div className="HomeServices">
			<h1>Наши услуги</h1>
			<div className="textWithLines">
				<fieldset>
					<legend>Что мы предлагаем</legend>
				</fieldset>
			</div>
			<CircleContainer />
		</div>
	);
}

export default HomeServices;