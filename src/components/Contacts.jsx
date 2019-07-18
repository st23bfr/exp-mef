import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './marker';
import './Contacts.css'
import contactData from './../etc/contactData'

class Contacts extends React.Component {
	render() {
		return(
			<div className="Contacts">
				<h2>Контакты</h2>
				<div className="contactsText">
					<p>{someText+someText}
					</p>
				</div>
				<section>
					<ul className="contactsList">
						<li>
							<span className="glyphicon glyphicon-earphone"></span>
							{' '}{contactData.phone}
						</li>
						<li>
							<span className="glyphicon glyphicon-envelope"></span>
							{' '}{contactData.email}
						</li>
					</ul>
				</section>
				<div className="gMap"><SimpleMap /></div>
			</div>
		)
	}
}

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11,
    mapTypeControl: true
  };

	createMapOptions() {
		return {
			gestureHandling: 'greedy' // Will capture all touch events on the map towards map panning
		}
	}

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        options={this.createMapOptions()}
      >
      <MyGreatPlace lat={59.955413} lng={30.337844} text={' '} />
{/*        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />*/}
      </GoogleMapReact>
    );
  }
}





let someText ="Lorem ipsum dolor sit amet, consectetur adipiscingelit. Phasellus imperdiet, nulla et dictum interdum,nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultricesnec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit."

export default Contacts