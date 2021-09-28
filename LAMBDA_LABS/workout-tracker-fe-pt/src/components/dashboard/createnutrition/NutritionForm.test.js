import React from "react";
import ReactDOM from "react-dom";
import {NutritionForm} from "./NutritionForm";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

it("Checks if the Date label is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <NutritionForm />
    </BrowserRouter>
  );
  const date = wrapper.getByText(/Date/i);
  expect(date).toBeInTheDocument();
});

it("Checks if the Time label is present", () => {
    const wrapper = rtl.render(
      <BrowserRouter>
        <NutritionForm />
      </BrowserRouter>
    );
    const time = wrapper.getByText(/Time/i);
    expect(time).toBeInTheDocument();
  });