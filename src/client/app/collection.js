import React from 'react';
import CreateProspect from './model-popup/CreateProspect'
var Collection = React.createClass({
	render:function(){
		<CreateProspect ref="ceateProspect" />
		return (<div>I am in collection 
			<button onClick="">Click</button></div>)
	}
});
export default Collection;

