var React = require('react');
var contentDiv = {
  height: '100%',
  width: '90%',
  overflow:'auto',
  backgroundColor: '#f2f2f2',
  float: 'left',

};
var DataContainer= React.createClass({
	render:function (){
	return (<div style={contentDiv}> <div name="popup"></div>    {this.props.content}   </div>);
  }
});

export default DataContainer;