import React from "react";
import { NavLink } from "react-router-dom";
import {startLogout} from '../redux/actions/auth'
import {connect} from 'react-redux'

const Layout = ({ children, dispatch }) => {
  return (
    <div className="layout--container">
      <div className="layout--nav">
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
        <a  onClick={() => dispatch(startLogout())}>
          🚪 Log Out
        </a>
      </div>
      {children}
    </div>
  );
};

export default connect()(Layout);
