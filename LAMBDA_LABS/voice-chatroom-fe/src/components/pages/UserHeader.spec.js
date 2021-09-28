import React from "react";
import { shallow } from "enzyme";
import UserHeader from "../dashboards/UserHeader";

import { findByTestAtrr } from "../../utils/testHelpers";

describe("it renders", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserHeader />);
  });

  it("without crashing", () => {
    const component = findByTestAtrr(wrapper, "userHeader");
    expect(component.length).toBe(1);
  });

  it("Should render a title", () => {
    const title = findByTestAtrr(wrapper, "title");
    expect(title.length).toBe(1);
  });

  it("Should render a location", () => {
    const location = findByTestAtrr(wrapper, "location");
    expect(location.length).toBe(1);
  });
});
