import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      group: props.budget ? props.budget.group : "",
      description: props.budget ? props.budget.description : "",
      amount: props.budget ? (props.budget.amount / 100).toString() : "",
      createdAt: props.budget ? moment(props.budget.createdAt) : moment(),
      categories: props.categoryGroup,
      calenderFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  onGroupChange = e => {
    const group = e.target.value.toLowerCase();
    this.setState(() => ({
      group
    }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calenderFocused: focused
    }));
  };

  onCategoryClick = e => {
    this.onGroupChange(e);
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please fill in the description and amount fields"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        group: this.state.group || "random",
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf()
      });
      if (
        this.state.group &&
        !this.state.categories.includes(this.state.group)
      ) {
        this.props.addCategory(this.state.group);
      }
      this.setState({
        group: "",
        description: "",
        amount: ""
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.categories.map(category => {
          return (
            <button
              key={category}
              value={category}
              onClick={this.onCategoryClick}
            >
              {category}
            </button>
          );
        })}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Spending group e.g food"
            value={this.state.group}
            onChange={this.onGroupChange}
          />
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => {
              false;
            }}
          />
          <button>Add Budget</button>
        </form>
      </div>
    );
  }
}

export default BudgetForm;
