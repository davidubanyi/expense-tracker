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
      <div className="container">
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextInputChange}
          placeholder="search"
        />
        <div className="button-tags">
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
        </div>
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
        <style jsx>
          {`
            .container {
              display: flex;
              flex-direction: column;
              position: relative;
              max-width: 400px;
              align-content: center;
              margin-left: 50px;
            }
            .button-tags {
              background-color: white;
              padding: 0px 0px 5px 5px;
              margin-bottom: 20px;
              border: 0.2px solid lightgreen;
            }

            input {
              outline: none;
            }
            input[type="text"] {
              -webkit-appearance: textfield;
              -webkit-box-sizing: content-box;
              font-family: inherit;
              font-size: 100%;
            }
            input::-webkit-search-decoration,
            input::-webkit-search-cancel-button {
              display: none;
            }

            input[type="text"] {
              background: white
                url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png)
                no-repeat 9px center;
              border: solid 1px lightgreen;
              padding: 9px 10px 9px 32px;
              width: 55px;

              -webkit-transition: all 0.5s;
              -moz-transition: all 0.5s;
              transition: all 0.5s;
              margin-bottom: 20px;
            }
            input[type="text"]:focus {
              width: 130px;
              background-color: #fff;
              border-color: lightgreen;

              -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
              -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
              box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
            }
            select {
              margin-bottom: 20px;
              border-radius: 0;
            }
          `}
        </style>
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
