import expensesReducer from "../../redux/reducers/expenses";
import moment from "moment";

//test the default value
test("should return the default empty array", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

//test the add expense action
test("should set the add action", () => {
  const expense = {
    id: "1",
    description: "adding something",
    amount: 5000,
    createdAt: moment(0)
      .add(15, "years")
      .valueOf()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([expense]);
});

//should test the remove expense action
test("should test the remove action reducer", () => {
  const expenses = [
    {
      id: "1",
      description: "adding something",
      amount: 5000,
      createdAt: moment(0)
        .add(15, "years")
        .valueOf()
    }
  ];
  const action = {
    type: "REMOVE_EXPENSE",
    id: "1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([]);
});

//should return the array if the id not found
test("should test the remove action if the id not found", () => {
  const expenses = [
    {
      id: "1",
      description: "adding something",
      amount: 5000,
      createdAt: moment(0)
        .add(15, "years")
        .valueOf()
    }
  ];
  const action = {
    type: "REMOVE_EXPENSE",
    id: "gibber"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//should test the edit expense action
test("should test the edit action reducer", () => {
  const expenses = [
    {
      id: "1",
      description: "adding something",
      amount: 5000,
      createdAt: moment(0)
        .add(15, "years")
        .valueOf()
    }
  ];
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: {
      description: "something else",
      amount: 9000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe("something else");
});

//should not edit expense with wrong id
test("should test the edit action reducer", () => {
  const expenses = [
    {
      id: "1",
      description: "adding something",
      amount: 5000,
      createdAt: moment(0)
        .add(15, "years")
        .valueOf()
    }
  ];
  const action = {
    type: "EDIT_EXPENSE",
    id: "giberish",
    updates: {
      description: "something else",
      amount: 9000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe("adding something");
});
