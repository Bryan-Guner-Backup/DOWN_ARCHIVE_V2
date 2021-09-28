import React, { useEffect, useState } from "react";
import { firebase } from "../helpers/index";
//importing axios for http request to api
import axios from "axios";
//Requiring only the packages
const firebaseUser = require("firebase/app");
require("firebase/auth");

//TODO:
// 1.IF user completed the on-boarding fields then redirect to dashboard
// 2.On the On-boarding add a field for First and Last name

const Login = props => {
  const [isError, setRequestError] = useState(null);
  useEffect(() => {
    firebase();
    //HTTP request to API
    firebaseUser.auth().onAuthStateChanged(function(currentUser) {
      if (currentUser) {
        currentUser
          .getIdToken(/* forceRefresh */ false)
          .then(function(idToken) {
            // console.log('Token: ', idToken);
            const token = { idToken: idToken };
            axios
              .post(`${process.env.REACT_APP_API}/api/users/login`, token)
              .then(res => {
                //Succesful login
                //SAVE USER ID TO LOCAL STORAGE
                const id = res.data.id;
                // console.log(‘User ID’, id);
                localStorage.setItem("id", id);
                // SAVE TOKEN TO LOCAL STORAGE FOR PRIVATE ROUTE

                localStorage.setItem("authorization", idToken);
                // console.log('User Data Test: ', res.data);
                if (res.data.user_type === null) {
                  props.history.push("/welcome");
                } else {
                  localStorage.setItem("user_type", res.data.user_type);
                  props.history.push("/dashboard");
                }
              })
              .catch(err => {
                //Invalid token or connection issue
                console.log(
                  "Cannot connect to server or local server not running "
                );
                //If our server cannot be reach sign out user from firebase side
                setRequestError(500);
                firebaseUser.auth().signOut();
              });
          })
          .catch(function(error) {
            // Handle error
            console.log("Firebase login error", error);
            setRequestError(401);
          });
      } else {
        //User is currently logged out.
        console.log("You are currently logged out");
        //Clear local storage after sign out
        localStorage.clear();
      }
    });
  }, [props]);
  return (
    <div>
      {isError === 401 && <h4>Unauthorized, try again later.</h4>}
      {isError === 500 && <h4>Server connection error, try again later.</h4>}
      <div id="firebaseui-auth-container"></div>
      <div id="loader"></div>
    </div>
  );
};
export default Login;
