import db from "../../firebase/firebase";

//ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      group = "",
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { group, description, note, amount, createdAt };
    db.collection("expenses")
      .add(expense)
      .then(docRef => {
        dispatch(addExpense({ id: docRef.id, ...expense }));
      });
  };
};
//REMOVE_EXPENSE
export const removeExpense = id => ({
  type: "REMOVE_EXPENSE",
  id
});
//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
