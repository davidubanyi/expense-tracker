import React from "react";
import ExpenseList from "../ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters";
import ExpensesSummary from "../ExpensesSummary"
import Layout from "../Layout";


const ExpenseDashboardPage = () => {
  return (
    <Layout>
      <div className="container">
        <div>
        <ExpensesSummary />
        <ExpenseList />
        </div>
        <ExpenseListFilters />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex: 1;
            flex-direction: row;
            margin-top: 50px;
          }
        `}
      </style>
    </Layout>
  );
};

export default ExpenseDashboardPage;
