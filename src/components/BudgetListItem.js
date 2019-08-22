import React from "react";
import { connect } from "react-redux";
import { startRemoveBudget } from "../redux/actions/budget";
import { Link } from "react-router-dom";
import moment from 'moment'
import {toast, Flip} from 'react-toastify'
import numeral from 'numeral'

export const BudgetListItem = ({
  dispatch,
  group,
  description,
  amount,
  createdAt,
  id
}) => {
  const notify = () =>
    toast.warn("Deleted Budget", {
      position: toast.POSITION.TOP_CENTER,
      transition: Flip
    });
  return (
    <div className="list-item--container">
      <div className="list-item--details">
        <p>{group}</p>
        <h2>{description}</h2>
        <span>{moment(createdAt).format("ddd, Do MMMM")}</span>
      </div>
      <div className="list-item--amount">
        <h1>{numeral(amount / 100).format('$0,0.00')}</h1>
        <button
          onClick={e => {
            notify()
            dispatch(startRemoveBudget(id));
          }}
        >
          Remove
        </button>
        <Link to={`/edit_budget/${id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default connect()(BudgetListItem);
