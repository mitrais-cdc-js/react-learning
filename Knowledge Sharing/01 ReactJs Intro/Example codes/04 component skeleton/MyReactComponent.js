import React from 'react';

// this will be our component:
const MyReactComponent = React.createClass({

  propTypes: {
    // The propTypes object allows you to validate props being passed to your components.
  },

  // An array of objects each of which can augment the lifecycle methods
  mixins: [],

  // Functions that can be invoked on the component without creating instances
  statics: {
    aStaticFunction() {}
  },

  // The object returned by this method sets the initial value of this.state
  getInitialState() {
    return {};
  },

  // The object returned by this method sets the initial value of this.props
  // If a complex object is returned, it is shared among all component instances    
  getDefaultProps() {
    return {};
  },

  //--------- Lifecycle Methods ------------//

  // Invoked once BEFORE first render
  componentWillMount() {
    // Calling setState here does not cause a re-render
  },

  
  // The data returned from render is neither a string nor a DOM node.
  // It's a lightweight description of what the DOM should look like.
  // Inspects this.state and this.props and create the markup.
  // When your data changes, the render method is called again.
  // React diff the return value from the previous call to render with
  // the new one, and generate a minimal set of changes to be applied to the DOM.
  render() {
    // Returns the jsx markup (React has no templates) for a component
    // Should never update this.state or this.props
    return (<div></div>);
  },

  // Invoked once, only on the client (not on the server), immediately AFTER the initial rendering occurs.
  componentDidMount() { 
    // You can access any refs to your children
    // (e.g., to access the underlying DOM representation - ReactDOM.findDOMNode). 
    // The componentDidMount() method of child components is invoked before that of parent components.
    // If you want to integrate with other JavaScript frameworks,
    // set timers using setTimeout or setInterval, 
    // or send AJAX requests, perform those operations in this method.
  },

  // Invoked whenever there is a prop change
  // Called BEFORE a second render
  // Not called for the initial render
  componentWillReceiveProps(nextProps) {
    // Previous props can be accessed by this.props
    // Calling setState here does not trigger an an additional re-render
    console.log('componentWillReceiveProps');
  },

  // Determines if the render method should run in the subsequent step
  // Called BEFORE a second render
  // Not called for the initial render
  shouldComponentUpdate(nextProps, nextState) {
    // If you want the render method to execute in the next step
    // return true, else return false
      return true;
  },

  // Called IMMEDIATELY BEFORE a second render
  componentWillUpdate(nextProps, nextState) {
    // You cannot use this.setState() in this method
  },

  // Called IMMEDIATELY AFTER a second render
  componentDidUpdate(prevProps, prevState) {
  },

  // Called IMMEDIATELY before a component is unmounted from the DOM
  componentWillUnmount() {
  }
});

export default MyReactComponent
