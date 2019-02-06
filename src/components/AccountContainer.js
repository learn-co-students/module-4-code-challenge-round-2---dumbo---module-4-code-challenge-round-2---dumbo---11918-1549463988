import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state= {
    transactions: [],
    searchQuery: "",
    searchTransaction: []
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(data =>
      this.setState({
        transactions: data,
        searchTransaction: data
      })
    )
  }

  handleChange = (event) => {
    console.log(event.target.value);

    let filteredArray = [...this.state.transactions]

    filteredArray = filteredArray.filter(transaction =>
      (transaction.description.toLowerCase().includes(event.target.value)) ||
      (transaction.category.toLowerCase().includes(event.target.value))
    )

    this.setState({
      searchQuery: event.target.value,
      searchTransaction: filteredArray
    })
  }

  render() {
    return (
      <div>
        <Search
          searchQuery={this.state.searchQuery}
          onChange={this.handleChange} />

        <TransactionsList
          transactions={this.state.searchTransaction}/>
      </div>
    )
  }
}

export default AccountContainer
