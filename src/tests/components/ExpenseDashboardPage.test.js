import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test("should render expense dashboard correctly", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
  //expect(wrapper.find("h1").text()).toBe("Expensify");
});
