var React = require('react');
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Containerheader from './prospect/Containerheader';
var dataContainer = {
  boxShadow: '0 2px 2px 0 black, 0 0 2px 0 black',
  height:'40%'
  
};

var DataContainer= React.createClass({
	render:function (){
	return (<Row> 
   				<Col md={12} className="dataContainerHeader"> 
						<Containerheader/>
				</Col>
				<Col md={12} className="dataContainer">{this.props.content} </Col>
			</Row>);
  }
});

export default DataContainer;