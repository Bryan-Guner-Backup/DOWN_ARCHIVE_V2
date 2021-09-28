import React, { useState } from "react";
import GrantorSideBar from "./GrantorSideBar";
import TotalAmountGiven from "./TotalAmountGiven";
import TotalReceived from "./TotalReceived";
import YourGrants from "./YourGrants";
import ApplicationReceived from "./ApplicationReceived";
import { makeStyles } from "@material-ui/core/styles";

//Import firebase
const firebase = require("firebase/app");
require("firebase/auth");

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "82vh",
    backgroundColor: "#F0FDFE"
  },
  welcome: {
    paddingLeft: "10vw"
  },
  boxes: {
    display: "flex",
    marginLeft: "20%",
    height: "100%",
    flexWrap: "wrap"
  },
  sections: {
    width: "50%",
    backgroundColor: "#F0FDFE",
    paddingTop: "5vh"
  }
}));

const GrantorDashBoard = props => {
  //setting state for displaying username and loading
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentUser(user.displayName);
      setIsLoading(false);
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isLoading ? (
        <h1 className={classes.welcome}>Loading...</h1>
      ) : (
        <div>
          <h1 className={classes.welcome}>Welcome {currentUser}!</h1>
          <GrantorSideBar />
          <div className={classes.boxes}>
            <div className={classes.sections}>
              <TotalReceived />
              <TotalAmountGiven />
            </div>
            <div className={classes.sections}>
              <YourGrants />
              <ApplicationReceived />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrantorDashBoard;
