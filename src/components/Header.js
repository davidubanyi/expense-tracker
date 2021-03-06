import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import {connect} from 'react-redux'

const pageTitle = {
  expense: "Expenses",
  add_expenses: "Add Expenses",
  add_budget: "Add Budget",
  budget: "Budgets"
};

const Header = props => {
  return (
     <header>
      {props.location.pathname=='/' ? '' : <div className="top-nav">
        <p className="header-title">
          { pageTitle[props.location.pathname.slice(1)] || "EXPENSE TRACKER"}
        </p>
        {props.auth.displayName && <div className="welcome">Welcome, {props.auth.displayName}</div>}
      </div>}
      <style jsx>{`
        .top-nav {
          background-color: #484848;
          text-align: center;
          border-bottom: 1px solid #49a833;
          display: flex;
          justify-content: space-around;
          padding: 15px 0px;
          align-items: center;
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
        .welcome {
          color: white;
        }
      `}</style>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};


export default withRouter(connect(mapStateToProps)(Header))
