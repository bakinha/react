import React, { Component } from 'react';
import Controls from '..Controls3/Controls';
import TransactionHistory from '..TransactionHistory/TransactionHistory';
import Ballance from '..Ballance/Ballance';
import styles from '../Dashboard/Dashaboard.module.css';



class Dashboard extends Component
state = {
  inputData: 0,
  ballance: 0,
  income: 0,
  outcome: 0,
  history: {
transaction: '',
amount: '',
day: '',

  },

};

onChange = e => {
  this setState({inputData: +e.target.value});
};

onCLick = e => {
  console.log('onClick');
  this.setState { if
    (e.target.textContent === 'Deposit') {
this.setState ({ballance: this.state.inputData - this.state.ballance});
} else if (e.target.textContent === 'Withdraw'){
  this.setState(prevState => ({ ballance: prevState.ballance - prevState.inputData,
 outcome: prevState.outcome + prevState.outcome + prevState.inputData, }));
}

});

createHistory = (income,outcome,)


render () {
  return (
    <div className={styles.dashboard}>
    <Controls onChange={this.onChange} onClick={this.onClick} />
    <Ballance  income={this.state.income} outcome={this.state.outcome} ballance={this.state.ballance} />
    <TransactionHistory  />
    </div>
  );
};
