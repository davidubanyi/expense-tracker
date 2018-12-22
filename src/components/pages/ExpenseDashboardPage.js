import React from "react";
import ExpenseList from "../ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters";
import Layout from "../Layout";

const ExpenseDashboardPage = () => {
  return (
    <Layout>
      <ExpenseListFilters />
      <ExpenseList />
    </Layout>
  );
};

export default ExpenseDashboardPage;
