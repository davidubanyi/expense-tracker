import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../redux/selectors/expenses";

export const ExpenseList = props => {
  return (
    <div>
      {props.expenses.length === 0 && !props.addExpense ? (
        <div>
          <p>No Expenses</p>
          <NavLink to="/add_expenses">Add Expense</NavLink>
        </div>
      ) : (
        props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filter)
  };
};

export default connect(mapStateToProps)(ExpenseList);
