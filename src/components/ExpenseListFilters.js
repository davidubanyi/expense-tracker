import React from "react";
import { connect } from "react-redux";
import {
  setGroupFilter,
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../redux/actions/filters";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calenderFocused => {
    this.setState(() => ({
      calenderFocused
    }));
  };

  onTextInputChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSelectInputChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  onCategoryClick = e => {
    this.props.setGroupFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <button onClick={this.onCategoryClick} value="">
          all
        </button>
        {this.props.categories.map(category => {
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
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextInputChange}
        />
        <select onChange={this.onSelectInputChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          startDateId="startDate"
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filter,
  categories: state.category
});

const mapDispatchToProps = dispatch => ({
  setGroupFilter: groupName => dispatch(setGroupFilter(groupName)),
  setTextFilter: text => dispatch(setTextFilter(text)),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
