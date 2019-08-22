import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { startRemoveExpense } from "../redux/actions/expenses";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { toast, Flip } from "react-toastify";

export const ExpenseListItem = ({
  dispatch,
  group,
  description,
  amount,
  createdAt,
  id
}) => {
  const notify = () =>
    toast.warn("Deleted Expense", {
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
        <h1>{numeral(amount / 100).format("$0,0.00")}</h1>
        <button
          onClick={e => {
            notify();
            dispatch(startRemoveExpense(id));
          }}
        >
          Remove
        </button>
        <Link to={`/edit_expense/${id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default connect()(ExpenseListItem);
