import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        ExpensesDashboard
      </NavLink>
      <NavLink to="/createExpenses" activeClassName="is-active">
        CreateExpenses
      </NavLink>
      <NavLink to="/createBudget" activeClassName="is-active">
        CreateBudget
      </NavLink>
      <NavLink to="/budgetDashboard" activeClassName="is-active">
        ViewBudget
      </NavLink>
    </header>
  );
};

export default Header;
