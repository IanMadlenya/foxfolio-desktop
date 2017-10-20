// @flow
import React, { Component } from 'react';
import TransactionTable from './TransactionTable';

type Props = {
  transactions: any,
  ticker: any
};

export default class Transactions extends Component<Props> {

  render() {
    const transactions = flattenTransactions(this.props.transactions);

    return (
      <div className="container">
        <TransactionTable transactions={transactions} ticker={this.props.ticker}/>
      </div>
    );
  }
}

function flattenTransactions(transactions) {
  let flattenedTransactions = [];
  Object.keys(transactions)
    .forEach(sourceName => {
      flattenedTransactions = flattenedTransactions
        .concat(transactions[sourceName].trades).concat(transactions[sourceName].transfers);
    });
  flattenedTransactions.sort((a, b) => b.date - a.date);
  return flattenedTransactions;
}