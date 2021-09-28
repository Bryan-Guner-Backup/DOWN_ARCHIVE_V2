import React from "react";
import LandingNav from "../../containers/landingnav/landingnav";
import Intro from "../../containers/intro/Intro";
import { MainContainer } from "./style";
import Features from "../../containers/features/Features";

const LandingPage = () => {
  return (
    <MainContainer>
      <LandingNav />
      <Intro />
      <Features />
    </MainContainer>
  );
};

export default LandingPage;
