import React from "react";
import { Route } from "react-router-dom";
import FoodJournal from "./components/FoodJournal/FoodJournal";
import FoodSearch from "./components/FoodSearch/FoodSearch";
import Logout from "./components/Logout";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/UserProfile/UserProfile";

const Dashboard = () => {
  return (
    <>
      <div id="dashboard" className="wrapper flex-row">
        <SideBar />
        <div className="dashboard mt-4 wrapper flex-column">
          <Logout />
          <Route exact path="/dashboard" component={FoodJournal} />
          <Route path="/dashboard/food-search" component={FoodSearch} />
          {/* <Route path="/dashboard/profile" component={Profile} /> */}
        </div>
      </div>
      <div className="wave"></div>
    </>
  );
};

export default Dashboard;
