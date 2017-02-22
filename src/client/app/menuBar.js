var React = require('react');
import '../../../node_modules/elemental/less/elemental.less';
import { Link } from 'react-router';
import { Row, Col } from 'elemental';
var NavMenu = {
  height: '100%', 
  width: '10%',
  float: 'left',
  backgroundColor: '#c0c0c0',
};

var NavBar= React.createClass({
	render:function (){
	return (<div style={NavMenu}> 
			  <div className="menu">
			    	<Row>
			    	 <ul className="menu-ul">
			            <Col xs="1" sm="1" md="1" lg="1">
			              <li className="menu-li"><Link to="/prospect">Prospect</Link></li>
			            </Col>
			            <Col xs="1" sm="1" md="1" lg="1">
			              <li className="menu-li"><Link to="/collection">Collection</Link></li>
						</Col>
					</ul>	
		            </Row>
		        </div>    
		    </div>);
  }
});

export default NavBar;
