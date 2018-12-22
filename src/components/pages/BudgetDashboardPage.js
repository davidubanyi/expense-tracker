import React from "react";
import BudgetList from "../BudgetList";
import BudgetListFilters from "../BudgetListFilters";
import Layout from "../Layout";

const BudgetDashboardPage = () => {
  return (
    <Layout>
      <BudgetListFilters />
      <BudgetList />
    </Layout>
  );
};

export default BudgetDashboardPage;
