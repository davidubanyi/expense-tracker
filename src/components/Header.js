import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const pageTitle = {
  expense: "EXPENSES",
  add_expenses: "ADD EXPENSES",
  add_budget: "ADD BUDGET",
  budget: "BUDGETS"
};

const Header = props => {
  return (
    <header>
      <div className="top-nav">
        <p className="header-title">
          {props.location.pathname == "/"
            ? "EXPENSE TRACKER"
            : pageTitle[props.location.pathname.slice(1)] || "EXPENSE TRACKER"}
        </p>
      </div>
      <style jsx>{`
        .top-nav {
          background-color: white;
          text-align: center;
          border-bottom: 1px solid #49a833;
        }
        .header-title {
          font-size: 1.5em;
          color: #49a833;
          text-decoration: none;
          padding-bottom: 20px;
          padding-top: 20px;
          margin-top: 0;
          margin-bottom: 0;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </header>
  );
};

export default withRouter(Header);
