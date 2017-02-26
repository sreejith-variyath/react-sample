import React from 'react';
import { Link } from 'react-router';
import {connect } from 'react-redux';
import '../../style/style.css';
import {createProspect,createProspectSuccess} from '../actions/actionCreator';
import {Button,FormGroup } from 'react-bootstrap';
import {Grid,Row,Col } from 'react-bootstrap';

const actionsToProps = (dispatch) => {
	return {createProspect: (values) => { 
		 console.log("before createProspect");
		    	dispatch(createProspect(values)).then((response) => {
		    		console.log("before success");
		    		dispatch(createProspectSuccess(response.payload))
				});
	        }
    }
}

/*function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}*/


var  ProspectForm = React.createClass({
	getInitialState: function() {
    return {
      prospectName: "",
      InputRepo:"",OutPutRepo:"",filePath:"",scanFrequency:""
    };
  },
	handleOnchange:function(event){
		const parameterName = event.target.name;
		const parameterValue = event.target.value;
		this.setState({
			[parameterName]:event.target.value
		});
	 
	},
	handleSubmit:function(){
        var prospectObj={
		"job": {
			"description": this.state.prospectName,
			"repository_connection": this.state.InputRepo,
			"document_specification": {
				"startpoint": {
					"_value_": "",
					"_attribute_path": this.state.filePath,
					"_attribute_converttouri": "false",
					"include":[{"_value_":"","_attribute_match":"*","_attribute_type":"file"},{"_value_":"","_attribute_match":"*","_attribute_type":"directory"}]
				}
			},
			"pipelinestage": [{
				"stage_id": "1",
				"stage_isoutput": "true",
				"stage_connectionname": this.state.OutPutRepo,
				"stage_specification": {}
			}],
			"run_mode": this.state.scanFrequency
			}
		};

	return this.props.createProspect(prospectObj);
		

	},
	render:function(){
		return( 

		<form>
		<table className="createForm">
		 <tr><td  colSpan="2">
		 Name :
		 	<input type="text" size="30" name="prospectName" value={this.state.prospectName} onChange={this.handleOnchange} />
        	</td></tr>
        	<tr><td>
        	InputConnector : 
	        	<select name="InputRepo" value={this.state.InputRepo} onChange={this.handleOnchange} >
	        	 <option value="select" selected='true'>select</option>
	        	 <option value="InPutConnector">InPutConnector</option>
	        	</select>
	        </td><td>
	        OutPutConnector : 
	        	<select name="OutPutRepo" value={this.state.OutPutRepo} onChange={this.handleOnchange} >
	        	 <option value="select" selected='true'>select</option>
	        	 <option value="iDNAOutputConnector">iDNAOutputConnector</option>
	        	 </select>
	        	 </td></tr>
	         <tr><td  colSpan="2"> 
        	Document Path : 
        	<input type="text" name="filePath" value={this.state.filePath} onChange={this.handleOnchange} />
        	</td></tr><tr><td  colSpan="2">
        	Frequency : 
	        	<select name="scanFrequency" value={this.state.scanFrequency} onChange={this.handleOnchange} >
	        	 <option value="select" selected='true'>select</option>
	        	 <option value="scan once">scan once</option>
	        	 </select>
	        	</td></tr></table> 
	        	  <Button onClick={this.handleSubmit} >Create</Button> 
	   	</form>);
	}
		
});
export const CreateProspectForm=connect(null,actionsToProps)(ProspectForm);
export default CreateProspectForm;