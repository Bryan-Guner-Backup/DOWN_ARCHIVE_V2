import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import {
  makeStyles,
  Drawer,
  CssBaseline,
  Toolbar,
  Divider,
} from "@material-ui/core";
// Drawer
import DashNavbar from "../dashNav/DashboardNav";
import SettingDrawer from "../dashDrawer/SettingDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Drawer Components
import Dashboard from "../subPanels/dashboard/Dashboard";
import Profile from "../subPanels/profile/Profile";
import DashSettings from "../subPanels/dashSettings/DashSettings";
import SubscriptionForm from "../subPanels/subscriptionForm/SubscriptionForm";
import SlackCallback from "../../SlackCallback";
import RankingForm from "../../RankingForm";
import MembersList from "../../MembersList";
import SubDrawer from "../dashDrawer/SubDrawer.js";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // class passed to Dash-Navbar
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: "4.5rem",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

const DashPage = ({
  logout,
  authState,
  setSlackState,
  slackState,
  darkMode,
  setDarkMode,
}) => {
  const classes = useStyles();

  const mobileOpenQuery = useMediaQuery("(min-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        {/* Built Navbar from material-ui components.
      Passed in logout from App.js */}
        <DashNavbar
          logout={logout}
          position="fixed"
          className={classes.appBar}
          style={classes.appBar}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Drawer
          className={classes.drawer}
          variant={mobileOpenQuery ? "permanent" : "temporary"}
          classes={{ paper: classes.drawerPaper }}
          open={!mobileOpen}
          onClose={handleDrawerToggle}
          style={{ zIndex: 0 }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <SettingDrawer />
            <Divider />
            <SubDrawer slackState={slackState}/>
          </div>
        </Drawer>
      </div>
      <Switch>
        <Route exact path="/" render={(props) => <Dashboard {...props} />} />
        <Route path="/profile" render={(props) => <Profile {...props} />} />
        <Route
          path="/settings"
          render={(props) => <DashSettings {...props} />}
        />
        <Route
          path="/form"
          render={(props) => (
            <SubscriptionForm
              {...props}
              slackState={slackState}
              setSlackState={setSlackState}
            />
          )}
        />
        <Route
          path="/slackCallback"
          render={(props) => (
            <SlackCallback {...props} setSlackState={setSlackState} />
          )}
        />
        <Route path="/rank" slackState={slackState} component={RankingForm} />
        <Route
          path="/membersList"
          render={(props) => (
            <MembersList
              {...props}
              slackState={slackState}
              setSlackState={setSlackState}
            />
          )}
        />
      </Switch>
    </>
  );
};
export default DashPage;
