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
      <div className="top-nav">
        <p className="header-title">
          {props.location.pathname == "/"
            ? "EXPENSE TRACKER"
            : pageTitle[props.location.pathname.slice(1)] || "EXPENSE TRACKER"}
        </p>
        {<div>Welcome, {}</div>}
      </div>
      <style jsx>{`
        .top-nav {
          background-color: #484848;
          text-align: center;
          border-bottom: 1px solid #49a833;
          display: flex;
          justify-content: center;
          padding: 15px 0px;
        }
        .header-title {
          font-size: 1.5em;
          color: white;
          -webkit-text-decoration: none;
          text-decoration: none;
          padding: 8px 20px;
          /* padding-top: 8px; */
          margin-top: 0;
          margin-bottom: 0;
          border-bottom: 2px solid #49a833;
          background: black;
        }
        .header-title p {
          background: black;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </header>
  );
};

export default withRouter(Header);
