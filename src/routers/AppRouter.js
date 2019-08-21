import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import AddBudgetPage from "../components/pages/AddBudgetPage";
import BudgetDashboardPage from "../components/pages/BudgetDashboardPage";
import EditBudgetPage from "../components/pages/EditBudgetPage";
import LoginPage from "../components/pages/LoginPage";
import DashboardPage from "../components/pages/DashboardPage";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/expense" component={ExpenseDashboardPage} />
          <Route path="/budget" component={BudgetDashboardPage} />
          <Route path="/add_expenses" component={AddExpensePage} />
          <Route path="/add_budget" component={AddBudgetPage} />
          <Route path="/edit_expense/:id" component={EditExpensePage} />
          <Route path="/edit_budget/:id" component={EditBudgetPage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
