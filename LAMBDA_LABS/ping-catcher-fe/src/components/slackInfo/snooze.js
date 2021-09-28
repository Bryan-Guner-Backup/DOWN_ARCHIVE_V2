import React from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";

// upper cased snooze component title

const Snooze = ({ slackState, setSlackState }) => {
  const token = slackState?.authed_user?.access_token;
  const minutes = 1;

  const handleSetSnooze = (e) => {
    e.preventDefault();

    Axios.get(
      `https://slack.com/api/dnd.setSnooze?token=${token}&num_minutes=${minutes}`
    )
      // console.logs snooze response from slack
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error getting snooze", err));
  };

  const handleEndSnooze = (e) => {
    e.preventDefault();

    Axios.post(`https://slack.com/api/dnd.endSnooze?token=${token}`)
      // console.logs snooze has ended
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("error cancelling snooze", err);
      });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleSetSnooze}>
        Snooze 5 mins
      </Button>
      <Button variant="contained" color="primary" onClick={handleEndSnooze}>
        End Snooze
      </Button>
    </div>
  );
};

export default Snooze;
