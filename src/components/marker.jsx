import React from 'react';

import  './marker.css';

export default class MyGreatPlace extends React.Component {

  static defaultProps = {};

  render() {
    return (
       <div className="greatPlaceStyle">
          {this.props.text}
       </div>
    );
  }
}