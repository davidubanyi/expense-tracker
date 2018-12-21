import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const pageTitle = {
  expense: "Expenses",
  add_expenses: "Add Expenses",
  add_budget: "Add Budget",
  budget: "Budgets"
};

const Header = props => {
  return (
    <header>
      <NavLink to="/" exact={true}>
        <h1>
          {props.location.pathname == "/"
            ? "EXPENSE TRACKER"
            : pageTitle[props.location.pathname.slice(1)] || "EXPENSE TRACKER"}
        </h1>
      </NavLink>
      <NavLink to="/expense" activeClassName="is-active">
        ExpensesDashboard
      </NavLink>
      <NavLink to="/add_expenses" activeClassName="is-active">
        CreateExpenses
      </NavLink>
      <NavLink to="/add_budget" activeClassName="is-active">
        CreateBudget
      </NavLink>
      <NavLink to="/budget" activeClassName="is-active">
        ViewBudget
      </NavLink>
    </header>
  );
};

export default withRouter(Header);
