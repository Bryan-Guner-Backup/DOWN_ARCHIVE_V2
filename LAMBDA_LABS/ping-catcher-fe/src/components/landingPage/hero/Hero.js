import React from "react";
import Button from "@material-ui/core/Button";
import "./hero.css";
import Navbar from "../navbar/Navbar";

const Hero = ({ login, logout, authState }) => {
  return (
    <>
      <Navbar />
      <section data-testid="heroSection" className="hero">
        <div className="cta">
          <div className="cta-wrapper">
            <h1 className="cta-title">Ping Catcher</h1>
            <p data-testid="topInfo" className="cta-info-top">
              Time to gain <span className="underline">control</span> over your
              notifications. Create your own channels to group notifications
              into your favorite online chat apps.
            </p>
            <p className="cta-info text-left">
              Organize, color code, even snooze a message and get back to it
              when you have a moment. Improve your overall sanity and increase
              productivity with Ping Catcher.
            </p>
            {authState?.isAuthenticated && (
              <button className="cta-btn" onClick={logout}>
                Logout
              </button>
            )}
            {!authState?.isPending && !authState?.isAuthenticated && (
              <Button
                variant="contained"
                color="primary"
                className="cta-btn"
                onClick={login}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
