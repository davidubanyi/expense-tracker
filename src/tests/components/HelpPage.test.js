import React from "react";
import { shallow } from "enzyme";
import HelpPage from "../../components/HelpPage";

test("should render the help page correctly", () => {
  const wrapper = shallow(<HelpPage />);
  expect(wrapper).toMatchSnapshot();
  //expect(wrapper.find("h1").text()).toBe("Expensify");
});
