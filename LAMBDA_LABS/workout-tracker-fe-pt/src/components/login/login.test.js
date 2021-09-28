import React from "react";
import ReactDOM from "react-dom";
import Login from "./login";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

it("Checks if the text email is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const email = wrapper.getByText(/Email/i);
  expect(email).toBeInTheDocument();
});

it("Checks if the text password is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const password = wrapper.getByText(/Password/i);
  expect(password).toBeInTheDocument();
});

it("Checks if the text Login is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const password = wrapper.getByText(/Login/i);
});


it("Checks if the text Sign In is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const password = wrapper.getByText(/Sign In/i);
});

it("Checks if the text Sign In is present", () => {
  const wrapper = rtl.render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
  );
  const password = wrapper.getByText(/Don't have an account?/i);
});