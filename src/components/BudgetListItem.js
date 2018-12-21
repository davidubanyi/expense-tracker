import React from "react";
import { connect } from "react-redux";
import { removeBudget } from "../redux/actions/budget";
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
          dispatch(removeBudget(id));
        }}
      >
        Remove
      </button>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
};

export default connect()(BudgetListItem);
