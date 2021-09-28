import React from "react";
import ReactDOM from "react-dom";
import {WorkoutForm} from "./CreateWorkoutForm";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

it("Checks if the Duration label is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <WorkoutForm />
    </BrowserRouter>
  );
  const duration = wrapper.getByText(/Duration/i);
  expect(duration).toBeInTheDocument();
});

it("Checks if the Description label is present", () => {
    const wrapper = rtl.render(
      <BrowserRouter>
        <WorkoutForm />
      </BrowserRouter>
    );
    const description = wrapper.getByText(/Description/i);
    expect(description).toBeInTheDocument();
  });