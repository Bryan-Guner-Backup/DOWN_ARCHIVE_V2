import React, { useState, useMemo, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { LoginCallback } from "@okta/okta-react";
import LandingPage from "./components/landingPage/page/LandingPage";
// ResponsiveDrawer component moved to DashboardPage
import DashPage from "./components/dashboard/dashboardPage/DashboardPage";
import useStateWithLocalStorage from "../src/components/dashboard/subPanels/useStateWithLocalStorage";
import SlackCallback from "../src/components/SlackCallback";
import TokenRequest from "./components/slackInfo/TokenRequest.js";

import SlackSignIn from "./components/SlackSignIn.js";
import {
  LinearProgress,
  ThemeProvider,
  Paper,
  createMuiTheme,
} from "@material-ui/core";
import "./index.css";

function prefersDarkMode() {
  if (!window.matchMedia) return;
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  // console.log("user prefers dark-mode", darkMode.matches);
  return darkMode.matches;
}

function App() {
  // This is the auth logic in the top most part of the App.
  // Pass this down to both LandingPage and DashboardPage components
  const { authState, authService } = useOktaAuth();
  const [localAuthState, setLocalAuthState] = useStateWithLocalStorage(
    "authState",
    {}
  );
  const [newAuth, setNewAuth] = useState(localAuthState);
  const [slackState, setSlackState] = useState(false);
  // Review the Okta path on these

  useEffect(() => {
    setLocalAuthState(JSON.stringify(authState));
    setNewAuth(authState);
  }, [authState]);
  const login = async () => authService.login("/");
  const logout = async () => authService.logout("/");

  // variables to manipulate the '/' root of App to display correct page depanding on auth state.
  // Show the spinner if waiting to get auth back
  const showSpinner = newAuth?.isPending;
  // Show Landing page if not authorized - no token
  const showLandingPage = !newAuth?.isPending && !newAuth?.isAuthenticated;
  // Show the Dashboard page component
  const showDashboard = newAuth?.isAuthenticated;

  // Setting up Dark Mode to be used at the App.js level.
  const [darkMode, setDarkMode] = useState(prefersDarkMode());
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  const conditionalRender = () => {
    if (showSpinner) {
      // TODO: replace/modify/theme this progress indicator.
      return (
        <>
          ping-catcher
          <h1>
            <LinearProgress />
          </h1>
        </>
      );
    }
    if (showDashboard) {
      if (!slackState) return <SlackSignIn />;
      return (
        <>
          <TokenRequest setSlackState={setSlackState} slackState={slackState} />
          <DashPage
            logout={logout}
            slackState={slackState}
            setSlackState={setSlackState}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </>
      );
    }
    if (!showSpinner && !showDashboard && showLandingPage) {
      // LandingPage component with authState for logging in.
      return <LandingPage login={login} logout={logout} authState={newAuth} />;
    }
    return <h1>ERROR : conditional render encountered unknown condition.</h1>;
  };
  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        <Paper>
          {conditionalRender()}
          <Switch>
            <Route path="/implicit/callback" component={LoginCallback} />
            <Route
              path="/SlackCallback"
              render={(props) => (
                <SlackCallback {...props} setSlackState={setSlackState} />
              )}
            />
            <Route path="/slackSignIn" component={SlackSignIn} />
          </Switch>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
export default App;
