import React from "react";

import Snooze from "../../../slackInfo/snooze";
import EventCard from "../../../EventCard";

const Dashboard = ({ slackState, setSlackState, darkMode, setDarkMode }) => {
  return (
    <div style={{ marginLeft: "25%", marginTop: "5%" }}>
      <h1>Dashboard</h1>
      <Snooze slackState={slackState} setSlackState={setSlackState} />
      <EventCard />
    </div>
  );
};

export default Dashboard;
