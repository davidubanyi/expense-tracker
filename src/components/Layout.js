import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="nav">
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
      </div>
      {children}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: row;
            background: #f5fff9;
            height: 100vh;
          }
          .nav {
            display: flex;
            flex-direction: column;
            background: white;
            height: 300px;
            margin: 40px;
            padding: 30px;
          }
          .nav a {
            text-decoration: none;
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
