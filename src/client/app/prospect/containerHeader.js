var React = require('react');
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ProspectFormModel from './ProspectFormModel';

var Containerheader= React.createClass({
	render:function (){
	return (
						<Row>
							<Col md={5} className="innerHeader">Collection List</Col>
							<Col md={6} className="addButton"> <ProspectFormModel/><div name="popup"></div></Col>
						</Row>
				);
  }
});

export default Containerheader;