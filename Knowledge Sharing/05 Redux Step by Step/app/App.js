import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import bankStore from './bankStore';
import bankActionCreators from './bankActionCreators';

class BankApp extends Component {
  handleDeposit() {
    this.props.onDeposit(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  handleWithdraw() {
    this.props.onWithdraw(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  render() {
    return (
      <div>
        <header><img src="//www.pro-react.com/logos/redux-bank.svg" width="150" height="150" /><br/>Redux Bank</header>
        <br />
        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Amount" ref="amount" />
          <br />
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>
      </div>
    );
  }
}
BankApp.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
};

// Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
  return {
    balance: state.balance
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
    onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount))
  }
}
const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp)

render(
  <Provider store={bankStore}>
    <BankAppContainer />
  </Provider>,
  document.getElementById('root')
);
