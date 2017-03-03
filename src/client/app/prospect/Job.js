import React from 'react';
import {deleteProspect,deleteProspectSuccess} from '../actions/actionCreator';
import {ProgressBar} from 'react-bootstrap';
import {connect } from 'react-redux';
import {Button,Glyphicon,ButtonGroup} from 'react-bootstrap';
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
		let documents_processed = this.props.prospect.jobstatus.documents_processed;
		let documents_in_queue = this.props.prospect.jobstatus.documents_in_queue;
		let percentage_progress= (documents_processed/documents_in_queue)*100;
		console.log( documents_processed, documents_in_queue, percentage_progress);
		return(<tr>
					<td>{this.props.prospect.description}</td>
					<td>{this.props.prospect.jobstatus.status}</td>
					<td>
					{this.props.prospect.jobstatus.status != 'not yet run' &&
					 this.props.prospect.jobstatus.status != 'starting up' && 
					 this.props.prospect.jobstatus.status != 'restarting' && 
					 this.props.prospect.jobstatus.status != 'running no connector' && 
					 <ProgressBar active now={percentage_progress} label={percentage_progress+'%'} />} 

					
					</td>
					<td>
					 <ButtonGroup>
					    <Button><Glyphicon glyph="info-sign" /></Button> 
					    <Button onClick={()=>{this.delete(this.props.prospect.id)}}><Glyphicon glyph="Trash" /></Button> 
					  </ButtonGroup> 
					  </td>
					</tr>);
	}
})

export const ProspectJob=connect(null,actionsToProps)(Job);
export default ProspectJob;