import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="nav">
        <NavLink to="/expense" activeClassName="is-active">
          💸 Expenses
        </NavLink>
        <NavLink to="/budget" activeClassName="is-active">
          ⚖️ Budget
        </NavLink>
        <NavLink to="/add_expenses" activeClassName="is-active">
          💵 Add Expenses
        </NavLink>
        <NavLink to="/add_budget" activeClassName="is-active">
          📆 Add Budget
        </NavLink>
      </div>
      {children}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: row;
            height: 100vh;
            max-width: 60%;
            margin: 0 auto;
          }
          .nav {
            display: flex;
            flex-direction: column;
            background: white;
            height: 300px;
            margin: 50px;
            padding: 50px 50px 50px 40px;
            border: 1px solid green;
            min-width: 150px;
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
