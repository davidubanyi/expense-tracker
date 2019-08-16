import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import ExpenseForm from "../ExpenseForm";
import ExpenseListItem from "../ExpenseListItem";
import { connect } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { addCategory } from "../../redux/actions/category";
import Layout from "../Layout";

export class AddExpensePage extends React.Component {
  state = {
    latestExpense: null
  };
  onSubmit = expense => {
    this.props.addExpense(expense);
    this.setState(() => ({
      latestExpense: expense
    }));
    setTimeout(
      function() {
        this.setState({ latestExpense: null });
      }.bind(this),
      3000
    );
    // this.props.history.push("add_expenses");
  };
  addCategory = category => {
    this.props.addCategory(category);
  };

  render() {
    return (
      <Layout>
        <h1>Add Expense</h1>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.latestExpense && (
            <ExpenseListItem key={1} {...this.state.latestExpense} />
          )}
        </CSSTransitionGroup>

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
