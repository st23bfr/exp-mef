import React from 'react';
import './ContactListMini.css';
import contactData from './../etc/contactData';

function ContactListMini () {
	return (
		<section>
			<ul className="mini">
				<li>
					<span className="glyphicon glyphicon-earphone" />
					{' '}{contactData.phone}
				</li>
				<li>
					<span className="glyphicon glyphicon-envelope" />
					{' '}{contactData.email}
				</li>
			</ul>
		</section>
	);
}

export default ContactListMini;