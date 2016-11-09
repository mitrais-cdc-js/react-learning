var HelloMessage = React.createClass({
  render() {
    return (
      <div>
        <p>{this.props.someProps}</p>

      </div>
    );
  }
});

ReactDOM.render(<HelloMessage message="World" />,
   document.getElementById('root'));