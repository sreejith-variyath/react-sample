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
		return(<tr>
					<td>{this.props.prospect.description}</td>
					<td>Running</td>
					<td><ProgressBar active now={45} label={'45%'} /></td>
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