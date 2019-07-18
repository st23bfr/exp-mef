import React from 'react';

import './CircleContainer.css';
import circle1 from './../img/circle1.jpg';
import circle2 from './../img/circle2.jpg';
import circle3 from './../img/circle3.jpg';

function CircleContainer () {
	return (
		<div className="CircleContainer">
			<Circle 
				text="Фасадная съемка"
				icon="glyphicon glyphicon-camera"
				img={circle1}
				caption="Описание услуги"
			/>
			<Circle 
				text="Топографическая съемка"
				icon="glyphicon glyphicon-facetime-video"
				img={circle2}
				caption="Описание услуги"
			/>
			<Circle 
				text="Геодезическое сопровождение"
				icon="glyphicon glyphicon-lock"
				img={circle3}
				caption="Описание услуги"
			/>
		</div>
	);
}

class Circle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: false };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState(prevState => ({
			active: !prevState.active
		}));
	}

	render () {
		const { active } = this.state;
		const { img, caption, icon, text } = this.props;
		return (
			<div className="Circle">
				<div
					style={active? {display: "block"} : {display: "none"}}
					className="modal"
				>
					<span
						onClick={this.handleClick}
						class="close"
					>
						&times;
					</span>
					<img
						className="modal-content"
						src={img}
						alt={caption}
					/>
					<div id="caption">{caption}</div>
				</div>

				<div
					onClick={this.handleClick}
					className="CircleInner"
				>
					<span className={icon}></span>
					<div>{text}</div>
				</div>
			</div>
		);
	}
} 

export default CircleContainer;