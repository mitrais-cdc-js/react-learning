var Car = React.createClass({
	propTypes: {
   	 	make: React.PropTypes.string.isRequired,
    	model: React.PropTypes.string.isRequired,
  	},

	render: function() {
		return <div>
		  Car: {this.props.make} {this.props.model}
		</div>;
	}
});

ReactDOM.render(
	<Car make="Citroen"/>,
	document.getElementById('root'));