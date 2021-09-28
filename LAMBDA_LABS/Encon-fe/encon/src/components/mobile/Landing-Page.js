import React from "react";
import "../../styles/mobile/Landing-Page.scss";
import { Header } from "../mobile/Header.js";
import { Calculator } from "./Calculator";

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Header />
      <Calculator />
    </div>
  );
};
