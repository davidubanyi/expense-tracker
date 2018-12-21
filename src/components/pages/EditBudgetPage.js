import React from "react";
import { connect } from "react-redux";
import BudgetForm from "../BudgetForm";
import { editBudget, removeBudget } from "../../redux/actions/budget";

export class EditBudgetPage extends React.Component {
  onSubmit = budget => {
    this.props.editBudget(this.props.budget.id, budget);
    this.props.history.push("/budget");
  };

  onRemoveHandler = () => {
    this.props.removeBudget(this.props.budget.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <BudgetForm
          budget={this.props.budget}
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
    budget: state.budget.find(budget => {
      return budget.id === props.match.params.id;
    }),
    categories: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editBudget: (id, budget) => dispatch(editBudget(id, budget)),
    removeBudget: id => dispatch(removeBudget(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBudgetPage);
