import React from "react";
import ExpenseList from "../ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters";
import ExpensesSummary from "../ExpensesSummary"
import Layout from "../Layout";


const ExpenseDashboardPage = () => {
  return (
    <Layout>
      <div className="sub-dashboard--container">
        <div>
        <ExpensesSummary />
        <ExpenseList />
        </div>
        <ExpenseListFilters />
      </div>
    </Layout>
  );
};

export default ExpenseDashboardPage;
