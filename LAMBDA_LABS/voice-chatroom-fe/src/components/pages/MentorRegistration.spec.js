import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import authReducer from "../../reducers/auth";

import MentorRegistration from "./MentorRegistration";

function renderWithRedux(
  ui,
  { initialState, store = createStore(authReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

test("should render mentor name field", () => {
  const wrapper = renderWithRedux(<MentorRegistration />);
  const mentorNameLabel = wrapper.queryByLabelText("Mentor Name");
  expect(mentorNameLabel).toBeInTheDocument();
});

test("should render mentor category 1 field", () => {
  const wrapper = renderWithRedux(<MentorRegistration />);
  const mentorCategory1 = wrapper.queryByLabelText("Mentor Category 1");
  expect(mentorCategory1).toBeInTheDocument();
});

test("should render mentor bio field", () => {
  const wrapper = renderWithRedux(<MentorRegistration />);
  const mentorBioLabel = wrapper.queryByLabelText("Bio");
  expect(mentorBioLabel).toBeInTheDocument();
});

test("should add category fields", () => {
  const wrapper = renderWithRedux(<MentorRegistration />);

  fireEvent.click(wrapper.getByAltText("plus sign"));
  fireEvent.click(wrapper.getByAltText("plus sign"));

  const mentorCategory2 = wrapper.queryByLabelText("Mentor Category 2");
  expect(mentorCategory2).toBeInTheDocument();

  const mentorCategory3 = wrapper.queryByLabelText("Mentor Category 3");
  expect(mentorCategory3).toBeInTheDocument();
});
