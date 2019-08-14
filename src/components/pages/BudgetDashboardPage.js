import React from "react";
import BudgetList from "../BudgetList";
import BudgetListFilters from "../BudgetListFilters";
import BudgetSummary from "../BudgetSummary"
import Layout from "../Layout";

const BudgetDashboardPage = () => {
  return (
    <Layout>
      <BudgetSummary />
      <BudgetListFilters />
      <BudgetList />
    </Layout>
  );
};

export default BudgetDashboardPage;
