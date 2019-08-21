import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import categoryReducer from "../reducers/category";
import budgetReducer from "../reducers/budget";
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filter: filterReducer,
      category: categoryReducer,
      budget: budgetReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
