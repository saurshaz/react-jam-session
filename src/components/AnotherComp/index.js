import React, { Component } from 'react';



//   props, redux
export default class AnotherPlaceAppXYZ extends Component {
  render() {
    return (
    	<div>
    		<p> I'm a para { this.props.store.count }, Total clicks are { this.props.totalClicks }  </p>
    	</div>
    	)
  }
}