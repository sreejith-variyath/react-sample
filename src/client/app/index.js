import React from 'react';
import {render} from 'react-dom';
import RightNavigationBar from "./rightNavigationBar";
import '../style/bootstrap-override.css';
import Header from "./Header";
import DataContainer from "./dataContainer";
import FooterDiv from "./footerContainer";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


var dataContainer = {
    padding:'19px'
};

var appContainer = {
    border:1,
    borderColor:'RED'
};
var App = React.createClass( {
  render: function() { 
    return (
    <Grid fluid={true}> 
      <Header />
      <Row>
        <Col md={2} > <RightNavigationBar />  </Col>  {/* There is a 15px left and right padding for col */} 
        <Col md={10} style={dataContainer}> <DataContainer content={this.props.children}/> </Col>
        <Col md={9}> </Col>  
      </Row>
      {/*<Row> <Col md={12}><FooterDiv /></Col></Row>*/}
      {/*<RightNavigationBar /><div style={containerDiv}><NavBar /><DataContainer content={this.props.children}/></div> */}
      
    </Grid>) ;
  }
});

export default App;
