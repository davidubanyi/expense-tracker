import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import AddBudgetPage from "../components/pages/AddBudgetPage";
import BudgetDashboardPage from "../components/pages/BudgetDashboardPage";
import EditBudgetPage from "../components/pages/EditBudgetPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/budgetDashboard" component={BudgetDashboardPage} />
          <Route path="/createExpenses" component={AddExpensePage} />
          <Route path="/createBudget" component={AddBudgetPage} />
          <Route path="/editExpense/:id" component={EditExpensePage} />
          <Route path="/editBudget/:id" component={EditBudgetPage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
