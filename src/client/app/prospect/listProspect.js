var React = require('react');
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import {fetchProspect, fetchProspectSuccess}from '../actions/actionCreator';
import ProspectFormModel from './ProspectFormModel';

import Job from './Job';

function mapStateToProps(state){
	return{
		prospect : state.prospect,
	}
}

/*function dispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch);
}*/

const actionsToProps = (dispatch) => {
	return {fetchProspects:() => {
		    dispatch(fetchProspect()).then((response) => {
		        dispatch(fetchProspectSuccess(response.payload.data.job));
            });
		}
	}
}	

var ListProspect = React.createClass({
  componentWillMount() {
  	console.log("Inside ListProspects");
    this.props.fetchProspects();
  },
	render:function (){
		//(<div><pre> {JSON.stringify(this.props.prospect,'null','')}}</pre> </div>);
		console.log("props from listProspect "+this.props.prospect);
	return (<div style={{overflow: "auto",paddingBottom: "100px"}}><ProspectFormModel/><table className="proList"><tbody><tr><th>Name</th><th>Status</th><th>view
		</th><th>Progress</th><th>Action</th></tr>{this.props.prospect.prospectList.posts.map((prospect,i) => 
			<Job {... this.props} key={i} i={i} prospect={prospect} />)}</tbody></table></div>);
	
  }
});
export const ProspectList=connect(mapStateToProps,actionsToProps)(ListProspect);
export default  ProspectList;