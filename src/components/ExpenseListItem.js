import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../redux/actions/expenses";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
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
