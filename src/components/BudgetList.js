import React from "react";
import { connect } from "react-redux";
import BudgetListItem from "./BudgetListItem";
import selectBudget from "../redux/selectors/budgets";

export const ExpenseList = props => {
  return (
    <div>
      {props.budgets.length === 0 ? (
        <p>No Budget</p>
      ) : (
        props.budgets.map(budget => {
          return <BudgetListItem key={budget.id} {...budget} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    budgets: selectBudget(state.budget, state.filter)
  };
};

export default connect(mapStateToProps)(ExpenseList);
