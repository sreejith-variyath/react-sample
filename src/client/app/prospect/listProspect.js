var React = require('react');
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import {fetchProspect, fetchProspectSuccess}from '../actions/actionCreator';
import Table from 'react-bootstrap/lib/Table';

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
		    dispatch(fetchProspect()).then((response) => { console.log("before fetch sucess",response)
		        dispatch(fetchProspectSuccess(response.payload.data.job));
            });
		}
	}
}	

var ListProspect = React.createClass({
  componentWillMount() {
  	console.log("Inside ListProspects");
  	this.props.fetchProspects();
  	setInterval(this.props.fetchProspects, 300000);
    ;
  },
	render:function (){
		//(<div><pre> {JSON.stringify(this.props.prospect,'null','')}}</pre> </div>);
		console.log("props from listProspect ",this.props.prospect);
		
	return (
		
		<div>
			<Table responsive className="proList">
			    <thead>
			      <tr>
			      	 <th>Name</th>
			      	 <th>Status</th>
			      	 <th>Progress</th>
			      	 <th>Action</th>
			      </tr>
			    </thead>
			    <tbody>
			      	{this.props.prospect.prospectList.posts.map((prospect,i) => <Job {... this.props} key={i} i={i} prospect={prospect} />)}
				</tbody>
			</Table></div>
		);
	
  }
});
export const ProspectList=connect(mapStateToProps,actionsToProps)(ListProspect);
export default  ProspectList;