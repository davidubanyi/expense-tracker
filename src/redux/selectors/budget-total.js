export default budgets => {
    return budgets
      .map(budget => budget.amount)
      .reduce((sum, value) => sum + value, 0);
  };
  