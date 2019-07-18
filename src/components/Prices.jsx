import React from 'react';
import './Prices.css';

class Prices extends React.Component {
	render() {
		return(
			<div className="Prices">
				<h2>Наши цены</h2>
				<p className="PricesText">Lorem ipsum dolor sit amet, consectetur
 adipiscing elit. Phasellus imperdiet, nulla et dictum 
 interdum, nisi lorem egestas odio, vitae scelerisque 
 enim ligula venenatis dolor. Maecenas nisl est, ultrices 
 nec congue eget, auctor vitae massa. Fusce luctus vestibulum 
 augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, 
 lobortis in odio. Praesent convallis urna a lacus interdum ut 
 hendrerit risus congue. Nunc sagittis dictum nisi, sed 
 ullamcorper ipsum dignissim ac. In at libero sed nunc 
 enenatis imperdiet sed ornare turpis. Donec vitae dui 
 eget tellus gravida venenatis. Integer fringilla congue 
 eros non fermentum. Sed dapibus pulvinar nibh tempor porta. 
 Cras ac leo purus. Mauris quis diam velit.</p>
 				<p className="PricesText">Lorem ipsum dolor sit amet, consectetur
 adipiscing elit. Phasellus imperdiet, nulla et dictum 
 interdum, nisi lorem egestas odio, vitae scelerisque 
 enim ligula venenatis dolor. Maecenas nisl est, ultrices 
 nec congue eget, auctor vitae massa. Fusce luctus vestibulum 
 augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, 
 lobortis in odio. Praesent convallis urna a lacus interdum ut 
 hendrerit risus congue. Nunc sagittis dictum nisi, sed 
 ullamcorper ipsum dignissim ac. In at libero sed nunc 
 enenatis imperdiet sed ornare turpis. Donec vitae dui 
 eget tellus gravida venenatis. Integer fringilla congue 
 eros non fermentum. Sed dapibus pulvinar nibh tempor porta. 
 Cras ac leo purus. Mauris quis diam velit.</p>
				<Accordeon data={data}/>
			</div>
		)
	}
}

class Accordeon extends React.Component {
	render() {
		return(
			<div className="Accordeon">
			{this.props.data.map((e,i) =>(
				<AccordeonPanel key={i.toString()} name={e.name} text={e.text} price={e.price} />
			))}
			</div>
		)
	}
}

class AccordeonPanel extends React.Component {
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
		let prefix = act? "-act" : "-deact";
		return(
			<div className="AccoPanel">
				<div
					onClick={this.handleClick}
					className={"AccordeonPanelHead" + prefix}>
					<div>{this.props.name}</div>
					<div><span className={"glyphicon glyphicon" + (act? "-minus" : "-plus")}></span></div>
				</div>

				<div className="AccPanelBody-gen">
					<div className={"AccordeonPanelBody" + prefix}>{this.props.text}</div>
					
					<div className={"AccordeonPanelBody" + prefix} id="AccordeonPanelBodyPrice">{this.props.price}</div>
				</div>
			</div>
		)
	}
}


let data = [
	{
		name: 'Топографическая съемка',
		text: 'Topo ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '1 000 000 $'
	},
	{
		name: 'Фасадная съемка',
		text: 'Fasa ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '3 800 000 $'
	},
	{
		name: 'Исполнительная съемка',
		text: 'Ispo ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '850 000 $'
	},
	{
		name: 'Геодезический контроль',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '2 000 000 $'
	},
	{
		name: 'Наблюдение за деформацией',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '650 000 $'
	},
	{
		name: 'Разбивочные работы',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '10 000 $'
	},
	{
		name: 'Поэтажная съемка',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '10 000 $'
	},
	{
		name: 'Вынос осей сооружения',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '10 000 $'
	},
	{
		name: 'Определение объемов',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum.',
		price: '10 000 $'
	}
]

export default Prices