import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { startSetExpenses } from "./redux/actions/expenses";
import { startSetCategories } from "./redux/actions/category";
import { startSetBudget } from "./redux/actions/budget";
import {login, logout} from './redux/actions/auth'
import "./helpers/CurrencyHelper";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const store = configureStore();

toast.configure()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid))
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
        renderApp();
        if (history.location.pathname === "/") {
          history.push("/dashboard");
        }
      });
  } else {
    store.dispatch(logout())
    renderApp();
    history.push("/");
  }
});
