import React, { Component } from 'react';
import {Col, Image}  from 'react-bootstrap';
import logo from '../assets/logo.svg';


class Bubble extends Component {
	render() {
	    function importAll(r) {
      		return r.keys().map(r);
    	}
    	const images = importAll(require.context('../assets/profile/', false, /\.(png|jpe?g|svg)$/));
			return (
			<Col xs={4} md={3}>
				<Image className="smpiture grey-scale" src={this.props.image} alt="242x200" circle />
		          <h8>Donghyun Yeo</h8>
	      	</Col>
		);
	}
}

export default Bubble;