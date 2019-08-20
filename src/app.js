import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";
import {firebase} from "./firebase/firebase";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { startSetExpenses } from "./redux/actions/expenses";
import { startSetCategories } from "./redux/actions/category";
import { startSetBudget } from "./redux/actions/budget";
import "./helpers/CurrencyHelper";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store
  .dispatch(startSetExpenses())
  .then(() => {
    store.dispatch(startSetCategories());
  })
  .then(() => {
    store.dispatch(startSetBudget());
  })
  .then(() => {
    ReactDOM.render(jsx, document.getElementById("app"));
  });

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      console.log('log in')
    }else {
      console.log('log out')
    }
  })
