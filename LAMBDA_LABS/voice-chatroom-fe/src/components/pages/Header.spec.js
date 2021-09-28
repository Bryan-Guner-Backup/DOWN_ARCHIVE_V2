import React from "react";
import { mount } from "enzyme";
import Header from "./Header";

import { findByTestAtrr } from '../../utils/testHelpers'

jest.mock('@okta/okta-react', () => ({
    useOktaAuth: () => {
      return {
        authState: {},
        authService: {}
    };
  }
}));

describe("Header Component render success", () => {

  it("without errors", () => {
    const component = mount(<Header />);
    const wrapper = findByTestAtrr(component, 'headerComponent')
    expect(wrapper.length).toBe(1)
  });

});
