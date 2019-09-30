import React from "react";
import BudgetForm from "../BudgetForm";
import BudgetListItem from "../BudgetListItem";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { startAddBudget } from "../../redux/actions/budget";
import { addCategory } from "../../redux/actions/category";
import Layout from "../Layout";

export class AddBudgetPage extends React.Component {
  state = {
    latestBudget: null
  }
  onSubmit = budget => {
    this.props.startAddBudget(budget); 
    this.setState(() => ({
      latestBudget: budget
    }));
    setTimeout(
      function() {
        this.setState({ latestBudget: null });
      }.bind(this),
      3000
    );
    // this.props.history.push("/");
  };
  addCategory = category => {
    this.props.addCategory(category);
  };

  render() {
    return (
      <Layout>
        <h1>Add Budget</h1>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.latestBudget && (
            <BudgetListItem key={1} {...this.state.latestBudget} />
          )}
        </CSSTransitionGroup>
        <BudgetForm
          onSubmit={this.onSubmit}
          categoryGroup={this.props.categories}
          addCategory={this.addCategory}
          budgets={this.props.budgets}
        />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddBudget: budget => dispatch(startAddBudget(budget)),
  addCategory: category => dispatch(addCategory(category))
});

const mapStateToProps = state => ({
  categories: state.category,
  budgets: state.budget
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBudgetPage);
