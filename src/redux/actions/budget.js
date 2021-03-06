import db from "../../firebase/firebase";
import uuid from "uuid";

//ADD_EXPENSE
export const addBudget = budget => ({
  type: "ADD_BUDGET",
  budget
});

export const startAddBudget = (budgetData = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    const {
      group = "",
      description = "",
      amount = 0,
      createdAt = 0
    } = budgetData;

    const budget = { group, description, amount, createdAt };
    const id = uuid();

    dispatch(addBudget({ id, ...budget }));
    db.collection(`users/${uid}/budgets`)
      .doc(id)
      .set({userId: uid,...budget})
      .then(() => {
        console.log("added to the db successfully");
      });
  };
};

//REMOVE_EXPENSE
export const removeBudget = id => ({
  type: "REMOVE_BUDGET",
  id
});

export const startRemoveBudget = (id) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    dispatch(removeBudget(id))
     db.collection(`users/${uid}/budgets`).doc(id).delete().then(function(){
      console.log('deleted successfully from db')
    })
  }
}


//EDIT_EXPENSE
export const editBudget = (id, updates) => ({
  type: "EDIT_BUDGET",
  id,
  updates
});


export const startEditBudget = (id, updates) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    dispatch(editBudget(id, updates))
    db.collection(`users/${uid}/budgets`).doc(id).update(updates).then(()=> {
      console.log('edited from the db successfully')
    })
  }
}

//SET EXPENSES
export const setBudget = (budgets) => ({
  type: 'SET_BUDGET',
  budgets
})

//Start Set Expenses
export const startSetBudget = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return db.collection(`users/${uid}/budgets`).where('userId', '==', uid).get().then(function(querySnapshot){
      const budgets = []
      querySnapshot.forEach((doc)=>{
        const data = doc.data()
        budgets.push({
          id: doc.id,
          ...data
        })
      })
      dispatch(setBudget(budgets))
    })
  }
}