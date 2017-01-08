var React = require('react');

var Child = require('./Child.js');

var Parent = React.createClass({

	// getInitialState: function(){
	// 	return {
	// 		articles: 0
	// 	};
	// },

	render: function(){
		return(
			<div className = "container">
				<div className="jumbotron">
				  <h1>New York Times Article Scrubber</h1>
				  <p>Search for an annotate articles of interest!</p>
				</div>

				<Child />
			</div>

			)
	}


});

module.exports = Parent;