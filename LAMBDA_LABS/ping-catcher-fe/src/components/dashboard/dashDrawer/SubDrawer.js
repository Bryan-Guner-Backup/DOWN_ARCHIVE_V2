// Drawer to display subscription info
import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Axios from "axios";

const SubDrawer = ({ slackState, setSlackState }) => {
  const [subscription, setSubs] = useState([]);
  const slackUsername = slackState?.authed_user?.id;
  
  useEffect(() => {
    if (!slackUsername) return
    console.log("subs endpoint:", subscription);
    Axios.get(`https://ping-catcher-be.herokuapp.com/rankings/subscriptions/user/${slackUsername}`)
      .then((res) => {
        setSubs(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log("error on subscription", err);
      });
  }, [slackUsername]);

  return (
    <List>
      {/* will map over backend endpoint for subscriptions */}
      {["Subscription", "SecondSubscription", "ThirdSubscription"].map(
        (text) => (
          <ListItem button key={text}>
            <ListItemText primary={"• " + text} />
          </ListItem>
        )
      )}
    </List>
  );
};

export default SubDrawer;
