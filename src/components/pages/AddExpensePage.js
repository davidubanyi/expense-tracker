import React from "react";
import ExpenseForm from "../ExpenseForm";
import ExpenseList from "../ExpenseList";
import { connect } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { addCategory } from "../../redux/actions/category";
import Layout from "../Layout";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.addExpense(expense);
    // this.props.history.push("/");
  };
  addCategory = category => {
    this.props.addCategory(category);
  };

  render() {
    return (
      <Layout>
        <h1>Add Expense</h1>
        <ExpenseList />
        <ExpenseForm
          onSubmit={this.onSubmit}
          categoryGroup={this.props.categories}
          addCategory={this.addCategory}
        />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense)),
  addCategory: category => dispatch(addCategory(category))
});

const mapStateToProps = state => ({
  categories: state.category
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpensePage);
