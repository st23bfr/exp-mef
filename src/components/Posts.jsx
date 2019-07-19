import React from 'react';
import './Posts.css';
import circle1 from './../img/circle1.jpg';
import circle2 from './../img/circle2.jpg';
import circle3 from './../img/circle3.jpg';
import { Route, Link } from 'react-router-dom';
import TextWithImage from './TextWithImage';

class Posts extends React.Component {
	render() {
		return(
			<div>
				<Route
					path={`${this.props.match.url}/:topicId`}
					component={Topic}
				/>
				<Route
					exact
					path={this.props.match.url}
					render={() => (
						<div className="posts">
							<PostCard
								img={postsData.post1.img}
								date={postsData.post1.date}
								header={postsData.post1.header}
								text={postsData.post1.pretext} 
								link="/post1"
								match={this.props.match}
							/>
							<PostCard
								img={postsData.post2.img}
								date={postsData.post2.date}
								header={postsData.post2.header}
								text={postsData.post2.pretext} 
								link="/post2"
								match={this.props.match}
							/>
							<PostCard
								img={postsData.post3.img}
								date={postsData.post3.date}
								header={postsData.post3.header}
								text={postsData.post3.pretext} 
								link="/post3"
								match={this.props.match}
							/>
							<PostCard
								img={postsData.post4.img}
								date={postsData.post4.date}
								header={postsData.post4.header}
								text={postsData.post4.pretext} 
								link="/post4"
								match={this.props.match}
							/>
							<PostCard
								img={postsData.post5.img}
								date={postsData.post5.date}
								header={postsData.post5.header}
								text={postsData.post5.pretext} 
								link="/post5"
								match={this.props.match}
							/>
							<PostCard
								img={postsData.post6.img}
								date={postsData.post6.date}
								header={postsData.post6.header}
								text={postsData.post6.pretext} 
								link="/post6"
								match={this.props.match}
							/>
						</div>
					)}/>
		</div>
		)
	}
}

function Topic () {
	let topic = this.props.match.params.topicId
	return(
		<div className="projParts">
			<TextWithImage
				header={postsData[topic].header}
				text={postsData[topic].text+postsData[topic].text} 
				img={{src:postsData[topic].img, width:300, height:300}}
			/>
			<Link to='/posts'>
				<div id="backButton">Назад</div>
			</Link>
		</div>
	);
}


class PostCard extends React.Component {
	render() {
		return(
		<div className="PostCard">
			<div className="postHeader">
				<div id="calendarIcon"><span className="glyphicon glyphicon-calendar"></span></div>
				<div id="calendarDate">{this.props.date}</div>
			</div>
			<img src={this.props.img} alt="alte" height="250"/>
			<div className="postFooter" ></div>
			<div className="fixCaution"><h3>{this.props.header}</h3><div>{this.props.text}</div></div>
			<div className="fixCautionButton"><button>
		<Link to={`${this.props.match.url}${this.props.link}`}>Читать далее
		</Link>
			</button></div>
		</div>
		)
	}
}

let postsData = {
	post1: {
		header: 'Заголовок статьи1',
		pretext: 'Небольшое вступление в статью',
		text: "Текст один Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: circle1,
		date: "Saturday, 16 May 2015 00:00"
	},
	post2: {
		header: 'Заголовок статьи2',
		pretext: 'Небольшое вступление в статью',
		text: "Текст два Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: circle2,
		date: "Saturday, 16 May 2015 00:00"
	},
	post3: {
		header: 'Заголовок статьи3',
		pretext: 'Небольшое вступление в статью',
		text: "Текст три Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: circle3,
		date: "Saturday, 16 May 2015 00:00"
	},
	post4: {
		header: 'Заголовок статьи4',
		pretext: 'Небольшое вступление в статью',
		text: "Текст четыре Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: circle1,
		date: "Saturday, 16 May 2015 00:00"
	},
	post5: {
		header: 'Заголовок статьи5',
		pretext: 'Небольшое вступление в статью',
		text: "Текст пять Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: circle2,
		date: "Saturday, 16 May 2015 00:00"
	},
	post6: {
		header: 'Заголовок статьи6',
		pretext: 'Небольшое вступление в статью',
		text: "Текст шесть Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
		img: circle3,
		date: "Saturday, 16 May 2015 00:00"
	}
}

export default Posts;