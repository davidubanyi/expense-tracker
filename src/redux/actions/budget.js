import db from "../../firebase/firebase";
import uuid from "uuid";

//ADD_EXPENSE
export const addBudget = budget => ({
  type: "ADD_BUDGET",
  budget
});

export const startAddBudget = (budgetData = {}) => {
  return dispatch => {
    const {
      group = "",
      description = "",
      amount = 0,
      createdAt = 0
    } = budgetData;

    const budget = { group, description, amount, createdAt };
    const id = uuid();

    dispatch(addBudget({ id, ...budget }));
    db.collection("budgets")
      .doc(id)
      .set(budget)
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
  return dispatch => {
    dispatch(removeBudget(id))
     db.collection("budgets").doc(id).delete().then(function(){
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
  return dispatch => {
    dispatch(editBudget(id, updates))
    db.collection("budgets").doc(id).update(updates).then(()=> {
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
  return (dispatch) => {
    return db.collection('budgets').get().then(function(querySnapshot){
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