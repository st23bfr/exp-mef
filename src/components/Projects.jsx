import React from 'react';
import './Projects.css';
import TextWithImage from './TextWithImage';
import img1 from './../img/proj1.jpg'
import img2 from './../img/proj2.jpg'
import img3 from './../img/proj3.jpg'
import img4 from './../img/proj4.jpg'
import img5 from './../img/proj5.jpg'
import img6 from './../img/proj6.jpg'
import { Route, Link } from 'react-router-dom'

class Projects extends React.Component {
	render() {
		return(
		<div>
			<Route  path={`${this.props.match.url}/:topicId`} component={Topic}/>
			<Route exact path={this.props.match.url} render={() => (
				<div className="projects">
					<ProjectCard
						id="project-card1"
						text="Тема проекта"
						img={projData.proj1.img}
						caption="Подпись к картинке"
						match={this.props.match}
						link="/proj1"
					/>
					<ProjectCard
						id="project-card2"
						text="Тема проекта"
						img={projData.proj2.img}
						caption="Подпись к картинке"
						match={this.props.match}
						link="/proj2"
					/>
					<ProjectCard
						id="project-card3"
						text="Тема проекта"
						img={projData.proj3.img}
						caption="Подпись к картинке"
						match={this.props.match}
						link="/proj3"
					/>
					<ProjectCard
						id="project-card4"
						text="Тема проекта"
						img={projData.proj4.img}
						caption="Подпись к картинке"
						match={this.props.match}
						link="/proj4"
					/>
					<ProjectCard
						id="project-card5"
						text="Тема проекта"
						img={projData.proj5.img}
						caption="Подпись к картинке"
						match={this.props.match}
						link="/proj5"
					/>
					<ProjectCard
						id="project-card6"
						text="Тема проекта"
						img={projData.proj6.img}
						caption="Подпись к картинке"
						match={this.props.match}
						link="/proj6"
					/>
				</div>
			)}/>
		</div>
		)
	}
}

class Topic extends React.Component {
	render() {
		let topic = this.props.match.params.topicId
		return(
		<div className="projParts">
			{/*<h3>{topic}</h3>*/}
			<TextWithImage header={projData[topic].name} text={projData[topic].text+projData[topic].text} 
			img={{src:projData[topic].img, width:300, height:300}}/>
			<Link to='/projects'>
            <div id="backButton">Назад</div>
        	</Link>
		</div>
		)
	}
}

class ProjectCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activate: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState(prevState => ({
			activate: !prevState.activate
		}));
	}

	render() {
		let act = this.state.activate;
		return(
		<div id={this.props.id} className="ProjectCard">
			<div 
			style={act? {display: "block"} : {display: "none"}} 
			className="modal">
				<span onClick={this.handleClick} class="close">&times;</span>
				<img className="modal-content" src={this.props.img} alt={this.props.caption}/>
				<div id="caption">{this.props.caption}</div>
			</div>

				<Link to={`${this.props.match.url}${this.props.link}`}>
				<div id="projButton1" className="projectButton">
					<span className="glyphicon glyphicon-file"></span>
				</div></Link>

			<div onClick={this.handleClick} id="projButton2" className="projectButton">
				<span className="glyphicon glyphicon-search"></span>
			</div>
			
			<div className="overlayText">{this.props.text}</div>
		</div>
		)
	}
}

let projData = {
	proj1: {
		name: 'Какое то название1',
		text: "Текст один Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: img1
	},
	proj2: {
		name: 'Какое то название2',
		text: "Текст два Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: img2
	},
	proj3: {
		name: 'Какое то название3',
		text: "Текст три Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: img3
	},
	proj4: {
		name: 'Какое то название4',
		text: "Текст четыре Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: img4
	},
	proj5: {
		name: 'Какое то название5',
		text: "Текст пять Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: img5
	},
	proj6: {
		name: 'Какое то название6',
		text: "Текст шесть Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: img6
	}
}

export default Projects