import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      filtered: [],
      value: ""
    };
  }

  // handleChange = value => this.setState({ value });

  handleChange = value => {
    let newTransactions = [...this.state.filtered];
    newTransactions = [...this.state.filtered].filter(transaction => {
      return (
        transaction.category.toLowerCase().includes(value.toLowerCase()) ||
        transaction.description.toLowerCase().includes(value.toLowerCase())
      );
    });
    this.setState({
      filtered: newTransactions,
      value: value
    });
  };

  // filteredTransactions = value => {
  //   const newTransactions = [...this.state.filtered].filter(transaction => {
  //     return (
  //       transaction.category
  //         .toLowerCase()
  //         .includes(this.state.value.toLowerCase()) ||
  //       transaction.description
  //         .toLowerCase()
  //         .includes(this.state.value.toLowerCase())
  //     );
  //   });
  // };

  async componentDidMount() {
    const response = await fetch(
      "https://boiling-brook-94902.herokuapp.com/transactions"
    );
    const transactions = await response.json();
    this.setState({
      transactions: transactions,
      filtered: transactions
    });
  }

  render() {
    console.log(this.state.filtered);
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.filtered} />
      </div>
    );
  }
}

export default AccountContainer;
