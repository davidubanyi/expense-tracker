import React from "react";
import BudgetList from "../BudgetList";
import BudgetListFilters from "../BudgetListFilters";
import BudgetSummary from "../BudgetSummary";
import Layout from "../Layout";

const BudgetDashboardPage = () => {
  return (
    <Layout>
      <div className="sub-dashboard--container">
        <div>
          <BudgetSummary />
          <BudgetList />
        </div>
        <BudgetListFilters />
      </div>
    </Layout>
  );
};

export default BudgetDashboardPage;
