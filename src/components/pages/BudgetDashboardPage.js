import React from "react";
import BudgetList from "../BudgetList";
import BudgetListFilters from "../BudgetListFilters";

const BudgetDashboardPage = () => {
  return (
    <div>
      <BudgetListFilters />
      <BudgetList />
    </div>
  );
};

export default BudgetDashboardPage;
