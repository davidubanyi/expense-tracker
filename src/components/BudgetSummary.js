import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectBudgets from "../redux/selectors/budgets";
import selectBudgetsTotal from "../redux/selectors/budget-total";

const BudgetsSummary = ({ budgetCount, budgetsTotal }) => {
  const budgetWord = budgetCount === 1 ? "budget" : "budgets";
  const formattedBudgetsTotal = numeral(budgetsTotal/100).format("$0,0.00");
  return (
    <div>
      <h3>
        Viewing {budgetCount} {budgetWord} totalling {formattedBudgetsTotal}
      </h3>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleBudgets = selectBudgets(state.budget, state.filter);
  return {
    budgetCount: visibleBudgets.length,
    budgetsTotal: selectBudgetsTotal(visibleBudgets)
  };
};

export default connect(mapStateToProps)(BudgetsSummary);
