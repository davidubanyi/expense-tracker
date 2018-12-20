import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render the ExpenseListFilter correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render the ExpenseListFilter with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

//should handle text change
test("should handle text change", () => {
  const value = "new value";
  wrapper.find("input").simulate("change", {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
//should sort by date
test("should sort by date", () => {
  wrapper.find("select").simulate("change", {
    target: { value: "date" }
  });
  expect(sortByDate).toHaveBeenCalled();
});

//should sort by amount
test("should sort by amount", () => {
  wrapper.find("select").simulate("change", {
    target: { value: "amount" }
  });
  expect(sortByAmount).toHaveBeenCalled();
});
//should handle date changes
test("should handle date change", () => {
  const startDate = moment(0).add(20, "years");
  const endDate = moment(0).add(21, "years");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
//should handle date focus changes

test("should handle dates focus change", () => {
  const calenderfocused = true;
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
    calenderfocused
  );
  expect(wrapper.state("calenderFocused")).toBe(calenderfocused);
});
