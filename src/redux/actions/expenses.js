import db from "../../firebase/firebase";
import uuid from 'uuid'

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
    const id = uuid()
    dispatch(addExpense({ id: id, ...expense }));
    db.collection("expenses")
      .doc(id).set(expense)
      .then(() => {
        console.log('added to db successfully')
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
    dispatch(removeExpense(id))
     db.collection("expenses").doc(id).delete().then(function(){
      console.log('deleted successfully from db')
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
    dispatch(editExpense(id, updates))
    db.collection("expenses").doc(id).update(updates).then(()=> {
      console.log('edited from the db successfully')
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