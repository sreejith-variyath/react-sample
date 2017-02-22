import React from 'react';
var prospect = React.createClass({
getInitialState: function() {
    return {
      jobs: []
    }
  },
	componentWillMount: function() {
    var _this = this;
    this.serverRequest = 
      axios
        .get("http://localhost:8345/mcf-api-service/json/jobs")
        .then(function(result) {    
          _this.setState({
            jobs: result.data.job
          });
        })
  },
	render:function(){
		console.log(jobs);
		return jobs;
	}
});
export default prospect;