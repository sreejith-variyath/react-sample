import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
var contentDiv = {
  boxShadow: '0 0 7px black',
};

var logoConnector = {
	marginLeft:878,
};


var Header= React.createClass({
	render:function (){
	return (
		       <Row>
		         <Col md={12} style={contentDiv}>
					<img src="./images/logo.png"/>
					<img style={logoConnector} src="./images/logo-icollector.png"/>
				</Col>
				</Row>
				
				);
  }
});

export default Header;

