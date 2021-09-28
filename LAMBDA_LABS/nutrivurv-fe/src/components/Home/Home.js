import React from "react";
import { Route } from "react-router-dom";
import About from "./components/About";
import LandingPage from "./components/LandingPage/LandingPage";
import Navigation from "./components/Navigation";
import Onboarding from "./components/Onboarding/Onboarding";
import SignIn from "./components/SignIn";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/signin" component={SignIn} />
    </div>
  );
};

export default Home;
