import React from 'react';

import './TextWithImage.css';

function TextWithImage ({header, img, text} = this.props) {
	return (
		<div className="TextWithImage">
			<h2 className="TextWithImage-header">{header}</h2>
			<p>
				<img
					src={img.src}
					alt="Logotype"
					width={img.width}
					height={img.height}
				/>
				{text}
			</p>
		</div>
	);
}

export default TextWithImage;