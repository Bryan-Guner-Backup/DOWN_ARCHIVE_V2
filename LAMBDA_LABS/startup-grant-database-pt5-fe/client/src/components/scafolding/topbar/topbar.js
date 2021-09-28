import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Grantify.png";
import "./topbar.css";

const firebase = require("firebase/app");
require("firebase/auth");

const TopBar = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, [isLogin]);

  return (
    <div className="top-bar">
      <div className="logo">
        <a href="/">
          <img
            alt="Where startups find grants"
            src={require("./Grantify.png")}
          />
        </a>
      </div>
      <div className="nav-links">
        <NavLink to="/search">Search for Grants</NavLink>
        <br />
        {isLogin ? (
          <NavLink exact to="/dashboard">
            My Dashboard
          </NavLink>
        ) : null}
        <br />
        {isLogin ? (
          <NavLink
            onClick={e => {
              firebase
                .auth()
                .signOut()
                .then(function() {
                  // Sign-out successful.
                  console.log("Successful Loged out!");
                  setIsLogin(false);
                })
                .catch(error => {
                  // An error happened.
                  console.log("There was an issue while signing out!", error);
                });
            }}
            to="/login"
            className="logout"
          >
            Log Out
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default TopBar;
