import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

it("renders the landing page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>,
    div
  );
});

it("Checks if the text Get Started is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
  const element = wrapper.getByText(/Get Started/i);
  expect(element).toBeInTheDocument();
});

it("Checks if the text Sign in is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
  const element = wrapper.getByText(/Sign In/i);
  expect(element).toBeInTheDocument();
});

it("Checks if intro image has appropriate alt text", () => {
  const image = rtl.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
  const element = image.getByAltText("Workout");
  expect(element).toBeInTheDocument();
});
