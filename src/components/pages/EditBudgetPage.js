import React from "react";
import { connect } from "react-redux";
import BudgetForm from "../BudgetForm";
import { startEditBudget, startRemoveBudget } from "../../redux/actions/budget";
import Layout from "../Layout";

export class EditBudgetPage extends React.Component {
  onSubmit = budget => {
    this.props.startEditBudget(this.props.budget.id, budget);
    this.props.history.push("/budget");
  };

  onRemoveHandler = () => {
    this.props.startRemoveBudget(this.props.budget.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <Layout>
        <BudgetForm
          budget={this.props.budget}
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
    budget: state.budget.find(budget => {
      return budget.id === props.match.params.id;
    }),
    categories: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startEditBudget: (id, budget) => dispatch(startEditBudget(id, budget)),
    startRemoveBudget: id => dispatch(startRemoveBudget(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBudgetPage);
