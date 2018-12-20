import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../redux/actions/expenses";
import { Link } from "react-router-dom";

export const ExpenseListItem = ({
  dispatch,
  group,
  description,
  amount,
  createdAt,
  id
}) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt} - {group}
      </p>
      <button
        onClick={e => {
          dispatch(removeExpense(id));
        }}
      >
        Remove
      </button>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
};

export default connect()(ExpenseListItem);
