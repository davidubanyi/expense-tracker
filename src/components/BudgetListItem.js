import React from "react";
import { connect } from "react-redux";
import { startRemoveBudget } from "../redux/actions/budget";
import { Link } from "react-router-dom";

export const BudgetListItem = ({
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
          dispatch(startRemoveBudget(id));
        }}
      >
        Remove
      </button>
      <Link to={`/edit_budget/${id}`}>Edit</Link>
    </div>
  );
};

export default connect()(BudgetListItem);
