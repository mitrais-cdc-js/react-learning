var Car = React.createClass({
getInitialState: function() {
	return {
		make: this.props.make,
		model: this.props.model,
		year: 2010
	}
},

onClick: function(e) {
	this.setState({make: 'Lamborghini', model: 'Gallardo - Another model'});
	//this.model = 'Gallardo - Another model - not use setState';
},

render: function() {
	return (
		<div>
			<div>
				{this.state.make} {this.state.model} {this.state.year}
			</div>
			<input type="button" value="Change" onClick={this.onClick}/>
		</div>
	);
}
});

ReactDOM.render(
	<Car make='Hyundai' model='Genesis' />,
	document.getElementById('root'));