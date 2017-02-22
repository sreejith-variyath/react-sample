var React = require('react');
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Job from './Job';

function mapStateToProps(state){
	return{
		prospect : state.prospect,
	}
}

function dispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch);
}


var ListProspect = React.createClass({
	render:function (){
		//(<div><pre> {JSON.stringify(this.props.prospect,'null','')}}</pre> </div>);
		console.log("props from listProspect "+this.props.prospect);
	return (<table className="proList"><tbody><tr><th>Name</th><th>Status</th><th>view</th><th>Progress</th></tr>{this.props.prospect.map((prospect,i) => <Job {... this.props} key={i} i={i} prospect={prospect} />)}</tbody></table>);
	
  }
});
export const ProspectList=connect (mapStateToProps,dispatchToProps)(ListProspect);
export default  ProspectList;