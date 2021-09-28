// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import App from "./App";
import MutationObserver from "mutation-observer";
import { BrowserRouter } from "react-router-dom";
global.MutationObserver = MutationObserver;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
});
