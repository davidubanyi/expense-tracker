import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../../redux/actions/expenses";
import Layout from "../Layout";
import {toast, Flip} from 'react-toastify'

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.notify()
    this.props.history.push("/expense");
  };

  onRemoveHandler = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push("/");
  };
  notify = () => toast.success('Edited Expense', {
    position: toast.POSITION.TOP_CENTER,
    transition: Flip})
  render() {
    return (
      <Layout>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
          categoryGroup={this.props.categories}
        />
        <button onClick={this.onRemoveHandler}>Remove</button>
      </Layout>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    }),
    categories: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: id => dispatch(startRemoveExpense(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
