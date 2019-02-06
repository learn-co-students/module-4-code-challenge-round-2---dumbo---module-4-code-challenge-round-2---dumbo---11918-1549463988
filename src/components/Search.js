import React from 'react'

const Search = (props) => {
  const {searchQuery, onChange} = props
  console.log(props);

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={searchQuery}
        onChange={(event)=> onChange(event)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
