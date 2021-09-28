import React from "react";
import Register from "./register";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";

global.MutationObserver = MutationObserver;

it("Checks if the text Sign up is present", () => {
  const wrapper = rtl.render(
    <>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </>
  );

  const element = wrapper.getAllByText(/Sign Up/i);
  expect(element.length).toEqual(2);
});

test("Render the Username label", async() => {
  const wrapper = rtl.render(<BrowserRouter><Register /></BrowserRouter>);

  const username = await wrapper.getByText(/username/i);
  expect(username).toBeVisible();
});

test("Render the Email label", async() => {
  const wrapper = rtl.render(<BrowserRouter><Register /></BrowserRouter>);

  const email = await wrapper.getByText(/email/i);
  expect(email).toBeVisible();
});

test("Render the Password label", async() => {
  const wrapper = rtl.render(<BrowserRouter><Register /></BrowserRouter>);

  const password = await wrapper.getByText(/password/i);
  expect(password).toBeVisible();
});