
var React = require("react");

var Child = React.createClass({

//initial state in search
	getInitialState: function(){
		return {term: ''}
	},

	handleChange: function(event){
		this.setState({term: event.target.value});
	},

	handleSubmit: function(event){

		event.preventDeafult();

		this.props.setTerm(this.state.term);
		this.setState({ term: ''});
		console.log(this.state.term);
	},


	render: function(){
		return(
	<div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Topic</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
           	<input
           		value={this.state.term}
           		type="text"
           		className="form-control text-center"
           		id="topic"
           		onChange = {this.handleChange}
           		required
           		/>

       		<h4 className="">
            	<strong>Start Year</strong>
          	</h4>

           	<input
           		value={this.state.term}
           		type="text"
           		className="form-control text-center"
           		id='Start_year'
           		/>

           	<h4 className="">
            	<strong>End Year</strong>
          	</h4>

           	<input
           		value={this.state.term}
           		type='text'
           		className="form-control text-center"
           		id="End_year"
           		/>

              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>

        </div>
      </div>
			)
	}
})

module.exports = Child;