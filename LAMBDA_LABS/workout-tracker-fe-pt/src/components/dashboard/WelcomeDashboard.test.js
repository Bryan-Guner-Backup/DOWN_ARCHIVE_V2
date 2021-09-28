import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";
import WelcomeDashboard from "./WelcomeDashboard";
global.MutationObserver = MutationObserver;

it("Checks if the Random Quote text is present", () => {
    const wrapper = rtl.render(
        <BrowserRouter>
            <WelcomeDashboard/>
        </BrowserRouter>
    );
    const email = wrapper.getByText(/Random Quote/i);
    expect(email).toBeInTheDocument();
});

it("Checks if the dashboard text is present", () => {
    const wrapper = rtl.render(
        <BrowserRouter>
            <WelcomeDashboard/>
        </BrowserRouter>
    );
    const email = wrapper.getByText(/dashboard/i);
    expect(email).toBeInTheDocument();
});