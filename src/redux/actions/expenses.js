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

export const startRemoveExpense = (id) => {
  return dispatch => {
     db.collection("expenses").doc(id).delete().then(function(){
      dispatch(removeExpense(id))
    })
  }
}


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return dispatch => {
    db.collection("expenses").doc(id).update(updates).then(()=> {
      dispatch(editExpense(id, updates))
    })
  }
}

//SET EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

//Start Set Expenses
export const startSetExpenses = () => {
  return (dispatch) => {
    return db.collection('expenses').get().then(function(querySnapshot){
      const expenses = []
      querySnapshot.forEach((doc)=>{
        const data = doc.data()
        expenses.push({
          id: doc.id,
          ...data
        })
      })
      dispatch(setExpenses(expenses))
    })
  }
}