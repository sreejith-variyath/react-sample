import React from 'react';
import {deleteProspect,deleteProspectSuccess} from '../actions/actionCreator';
import {ProgressBar} from 'react-bootstrap';
import {connect } from 'react-redux';
import {Button,Glyphicon} from 'react-bootstrap';
const actionsToProps = (dispatch) => {
	return {deleteProspect: (jobId) => { 
		   	dispatch(deleteProspect(jobId)).then((response) => {
		    		dispatch(deleteProspectSuccess(jobId))
				});
	        }
    }
}

const Job=React.createClass({

	delete : function(item){
		console.log(item);
		this.props.deleteProspect(item);
	},
	render(){
		return(<tr>
					<td>{this.props.prospect.description}</td>
					<td>running</td>
					<td>Info</td>
					<td><ProgressBar active now={45} /></td>
					<td> <Button onClick={()=>{this.delete(this.props.prospect.id)}}><Glyphicon glyph="Trash" /></Button> </td>
				</tr>);
	}
})

export const ProspectJob=connect(null,actionsToProps)(Job);
export default ProspectJob;