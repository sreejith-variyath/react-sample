import React from 'react';

const Job=React.createClass({
	render(){
		return(<tr>
					<td>{this.props.prospect.description}</td>
					<td>running</td>
					<td>Info</td>
					<td>10</td>
				</tr>);
	}
})

export default Job;