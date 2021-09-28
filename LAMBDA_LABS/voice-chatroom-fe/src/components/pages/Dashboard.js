import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../../sass/dashboard.scss";

//importing Components
import Navbar from "../navigation/Navbar";
import UserDashboard from "../dashboards/UserDashboard";
import UserProfile from "../profile/UserProfile";
import VerifyUser from "./VerifyUser";
import MentorProfile from "../profile/MentorProfile";
import CalendarPage from "./CalendarPage";

const Dashboard = () => {
  //selecting user from redux store
  const currentUser = useSelector((state) => state.authReducer.user);

  const { path } = useRouteMatch();

  // selecting mentors from redux store
  const currentMentors = useSelector((state) => state.mentorReducer.mentors);

  return (
    <div className="dashContainer" data-test="dashboard">
      <Navbar />
      <VerifyUser />
      {currentUser.id !== 0 && (
        <div>
          <Switch>
            <Route path={`${path}/calendar`}>
              <CalendarPage />
            </Route>
            <Route path={`${path}/profile`}>
              <UserProfile />
            </Route>
            <Route path={`${path}/mentor/profile`}>
              <MentorProfile />
            </Route>
            <Route path={`${path}`}>
              <UserDashboard />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
