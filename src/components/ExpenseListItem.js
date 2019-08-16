import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { startRemoveExpense } from "../redux/actions/expenses";
import { Link } from "react-router-dom";
import numeral from "numeral"

export const ExpenseListItem = ({
  dispatch,
  group,
  description,
  amount,
  createdAt,
  id
}) => {
  return (
    <div className="container">
      <div className="details">
        <p>{group}</p>
        <h2>{description}</h2>
        <span>{moment(createdAt).format("ddd, Do MMMM")}</span>
      </div>
      <div className="amount">
        <h1>{numeral(amount / 100).format('$0,0.00')}</h1>
        <button
          onClick={e => {
            dispatch(startRemoveExpense(id));
          }}
        >
          Remove
        </button>
        <Link to={`/edit_expense/${id}`}>Edit</Link>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background-color: #484848;
            padding: 12px 15px;
            margin-bottom: 10px;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
            min-width: 280px;
          }
          .details {
            margin-right: 40px;
          }
          .details p {
            color: #31ea31;
            font-size: 13px;
            margin-bottom: 8px;
            margin-top: 0;
          }
          .details h2 {
            color: white;
            font-size: 17px;
            font-weight: 700;
            margin-bottom: 7px;
            margin-top: 0;
          }
          .details span {
            font-size: 13px;
            color: #d9d9d9;
          }
          .amount h1 {
            margin: 0 auto;
            color: #11b511;
            background-color: white;
            padding: 5px 7px;
            font-size: 24px;
            border-radius: 2px;
            margin-bottom: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default connect()(ExpenseListItem);
