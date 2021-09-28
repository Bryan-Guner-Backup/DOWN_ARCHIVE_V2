import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";
import ProfileNav from "./ProfileNav";
global.MutationObserver = MutationObserver;

it("Checks if the Random Quote text is present", () => {
    const wrapper = rtl.render(
        <BrowserRouter>
            <ProfileNav/>
        </BrowserRouter>
    );
    const email = wrapper.getByText(/Account Information/i);
    expect(email).toBeInTheDocument();
});
