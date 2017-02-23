import React from 'react';
import {deleteProspect,deleteProspectSuccess} from '../actions/actionCreator';
import {connect } from 'react-redux';
const actionsToProps = (dispatch) => {
	return {deleteProspect: (jobId) => { 
		 console.log("before delete Prospect ",jobId);
		    	dispatch(deleteProspect(jobId)).then((response) => {
		    		dispatch(deleteProspectSuccess(jobId))
				});
	        }
    }
}

const Job=React.createClass({

	delete : function(item){
const parameterValue = item.target.value;
alert("prospect to delete",parameterValue);
this.props.deleteProspect(parameterValue);
	},
	render(){
		return(<tr>
					<td>{this.props.prospect.description}</td>
					<td>running</td>
					<td>Info</td>
					<td>10</td>
					<td><button value={this.props.prospect.id} onClick={this.delete}/></td>
				</tr>);
	}
})

export const ProspectJob=connect(null,actionsToProps)(Job);
export default ProspectJob;