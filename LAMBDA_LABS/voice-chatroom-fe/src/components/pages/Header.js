import React from "react";
import { useOktaAuth } from "@okta/okta-react";

import "../../sass/header.scss";

import Login from "../buttons/Login";
import Logout from "../buttons/Logout";

const Header = () => {
  const { authState } = useOktaAuth();

  return (
    <header data-test="headerComponent">
      <h1>
        <a href="wyzerapp.com/dashboard">Wyzer</a></h1>

      {authState.isAuthenticated ? <Logout /> : <Login />}
    </header>
  );
};

export default Header;
