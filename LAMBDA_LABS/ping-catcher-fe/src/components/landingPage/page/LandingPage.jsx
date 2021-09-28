import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Hero from "../hero/Hero";
import SlackCard from "../infoCard/SlackCard";
import NotifyCard from "../infoCard/NotifyCard";
import OrganizeCard from "../infoCard/OrganizeCard";
import Footer from "../footer/Footer";
import "./LandingPage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#393e46"
  },
}));

const LandingPage = ({ logout, login, authState }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline>
        <Hero login={login} logout={logout} authState={authState} />
        <section className="info">
          <SlackCard />
          <NotifyCard />
          <OrganizeCard />
        </section>
        <Footer title="Ping Catcher" />
      </CssBaseline>
    </div>
  );
};
export default LandingPage;