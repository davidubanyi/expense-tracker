import uuid from "uuid";

//ADD_EXPENSE
export const addBudget = ({
  group = "",
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_BUDGET",
  expense: {
    id: uuid(),
    group,
    description,
    note,
    amount,
    createdAt
  }
});
//REMOVE_EXPENSE
export const removeExpense = id => ({
  type: "REMOVE_BUDGET",
  id
});
//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_BUDGET",
  id,
  updates
});
