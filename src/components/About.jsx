import React from 'react';

import TextWithImage from './TextWithImage';

import './About.css';
import img1 from './../img/logo.jpg';

let someText ="Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit."


function About () {
	return (
		<div className="About">
			<TextWithImage
				header="О компании"
				text={someText+someText}
				img={{src:img1, width:350, height:350}}
			/>
			<TextWithImage
				header="О компании"
				text={someText+someText}
				img={{src:img1, width:350, height:350}}
			/>
			<TextWithImage
				header="О компании"
				text={someText+someText}
				img={{src:img1, width:350, height:350}}
			/>
		</div>
	);
}

export default About;