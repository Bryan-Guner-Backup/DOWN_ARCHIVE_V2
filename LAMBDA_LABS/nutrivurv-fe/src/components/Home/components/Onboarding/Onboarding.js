// import moment from "moment";
import React, { useState } from "react";
import { Route } from "react-router-dom";
// import SignIn from "../../../../components/SignIn/SignIn";
// import history from "../../../../history";
import SignUp from "../SignUp";
import ActivityLevel from "./components/ActivityLevel";
import GettingPersonal from "./components/GettingPersonal";
import GettingStarted from "./components/GettingStarted";
import WeightGoals from "./components/WeightGoals";
import BMI from "./components/bmi-calc/BMI";

const Onboarding = ({ match }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    target_weight_lbs: "",
    activity_level: "",
    standard: "true",
    height_ft: "",
    height_in: "",
    height_cm: "",
    weight_lbs: "",
    weight_kg: "",
    net_weekly_weight_change_lbs: "",
    date_of_birth: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  }

  return (
    <div>
      <Route
        exact
        path={`${match.url}`}
        render={(props) => (
          <GettingStarted {...props} handleChange={handleChange} user={user} />
        )}
      />
      <Route
        path={`${match.url}/getting-personal`}
        render={(props) => (
          <GettingPersonal {...props} handleChange={handleChange} user={user} />
        )}
      />
      <Route
        path={`${match.url}/activity-level`}
        render={(props) => (
          <ActivityLevel {...props} handleChange={handleChange} user={user} />
        )}
      />
      <Route
        path={`${match.url}/bmi`}
        render={(props) => (
          <BMI
            {...props}
            handleChange={handleChange}
            user={user}
            setUser={setUser}
          />
        )}
      />
      <Route
        path={`${match.url}/weight-goals`}
        render={(props) => (
          <WeightGoals {...props} handleChange={handleChange} user={user} />
        )}
      />
      <Route
        path={`${match.url}/register`}
        render={(props) => (
          <SignUp {...props} handleChange={handleChange} user={user} />
        )}
      />
    </div>
  );
};

export default Onboarding;
