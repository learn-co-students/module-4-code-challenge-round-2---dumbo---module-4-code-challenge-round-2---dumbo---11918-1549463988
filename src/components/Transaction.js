import React from "react";
// s

const Transaction = props => {
  const { amount, category, description, posted_at } = props.transaction;

  return (
    <tr>
      <td>{posted_at}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
