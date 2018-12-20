import uuid from "uuid";

//ADD_EXPENSE
export const addBudget = ({
  group = "",
  description = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_BUDGET",
  budget: {
    id: uuid(),
    group,
    description,
    amount,
    createdAt
  }
});
//REMOVE_EXPENSE
export const removeBudget = id => ({
  type: "REMOVE_BUDGET",
  id
});
//EDIT_EXPENSE
export const editBudget = (id, updates) => ({
  type: "EDIT_BUDGET",
  id,
  updates
});
