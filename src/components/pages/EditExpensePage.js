import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm";
import { editExpense, removeExpense } from "../../redux/actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/expense");
  };

  onRemoveHandler = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
          categoryGroup={this.props.categories}
        />
        <button onClick={this.onRemoveHandler}>Remove</button>
      </div>
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: id => dispatch(removeExpense(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);