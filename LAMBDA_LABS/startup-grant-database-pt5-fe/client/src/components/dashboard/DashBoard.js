import React, { useState } from "react";
import SideBar from "./SideBar";
import Saved from "./Saved";
import New from "./New";
import TotalSubmitted from "./TotalSubmitted";
import TotalAmountReceived from "./TotalAmountReceived";
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

const DashBoard = props => {
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
          <SideBar />
          <div className={classes.boxes}>
            <div className={classes.sections}>
              <TotalSubmitted />
              <TotalAmountReceived />
            </div>
            <div className={classes.sections}>
              <Saved />
              <New />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
