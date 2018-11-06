import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense } from "./redux/actions/expenses";
import { setTextFilter } from "./redux/actions/filters";
import getVisibleExpenses from "./redux/selectors/expenses";

const store = configureStore();
store.dispatch(
  addExpense({ description: "water bill", amount: 5000, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "gas bill", amount: 15000, createdAt: 5000 })
);
console.log(store.getState());

store.dispatch(setTextFilter("gas"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
