var React = require('react');
//import '../../../node_modules/elemental/less/elemental.less'
//import { Row, Col } from 'elemental'
var contentDiv = {
  height: '100%',
  width: '90%',
  backgroundColor: '#f2f2f2',
  float: 'left',

};
var DataContainer= React.createClass({
	render:function (){
	return (<div style={contentDiv}>     {this.props.content}   </div>);
  }
});

export default DataContainer;