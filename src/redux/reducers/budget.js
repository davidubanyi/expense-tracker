const budgetReducerDefaultState = [];

//budgets reducer
export default (state = budgetReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BUDGET":
      return [...state, action.budget];
    case "REMOVE_BUDGET":
      return state.filter(budget => budget.id !== action.id);
    case "EDIT_BUDGET":
      return state.map(budget => {
        if (budget.id === action.id) {
          return { ...budget, ...action.updates };
        } else {
          return budget;
        }
      });
    default:
      return state;
  }
};
