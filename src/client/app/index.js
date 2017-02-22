import React from 'react';
import {render} from 'react-dom';
import NavBar from "./menuBar";
import Header from "./Header";
import DataContainer from "./dataContainer";
import FooterDiv from "./footerContainer";


var containerDiv = {
    backgroundColor: '#b3d1ff',
    top: 40,
    height: '80%',
    width: '100%',
    zIndex: '100',
  margins:0,
};

var appContainer = {
    border:1,
    borderColor:'RED'
};
var App = React.createClass( {
  render: function() { 
    return (
    <div style={appContainer}> 
      <Header />
      <div style={containerDiv}><NavBar /><DataContainer content={this.props.children}/></div>
      <FooterDiv />
    </div>) ;
  }
});

export default App;
