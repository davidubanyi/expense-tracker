import React from "react";
import BudgetForm from "../BudgetForm";
import BudgetList from "../BudgetList";
import { connect } from "react-redux";
import { addBudget } from "../../redux/actions/budget";
import { addCategory } from "../../redux/actions/category";

export class AddBudgetPage extends React.Component {
  onSubmit = budget => {
    this.props.addBudget(budget);
    // this.props.history.push("/");
  };
  addCategory = category => {
    this.props.addCategory(category);
  };

  render() {
    return (
      <div>
        <h1>Add Budget</h1>
        <BudgetList />
        <BudgetForm
          onSubmit={this.onSubmit}
          categoryGroup={this.props.categories}
          addCategory={this.addCategory}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBudget: budget => dispatch(addBudget(budget)),
  addCategory: category => dispatch(addCategory(category))
});

const mapStateToProps = state => ({
  categories: state.category
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBudgetPage);
