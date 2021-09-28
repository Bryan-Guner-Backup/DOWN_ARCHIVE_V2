import React from "react";
import { NavSection, Logo, LogoText, SignIn } from "./style";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <>
      <NavSection>
        <Logo>
          Fit<LogoText>Tracker</LogoText>
        </Logo>
        <Link to="/login">
          <SignIn>Sign In</SignIn>
        </Link>
      </NavSection>
    </>
  );
};

export default LandingNav;
