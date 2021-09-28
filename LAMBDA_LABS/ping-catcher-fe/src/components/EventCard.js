import React, { useState, useEffect } from "react";
import PingCard from "./PingCard";
import axios from "axios";
const EventCard = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    console.log("eventCard");
    // GET request using axios inside useEffect React hook
    axios
      .get("https://ping-catcher-be.herokuapp.com/event")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log("event error", err);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexFlow: "row wrap",
        width: "60vw",
      }}
    >
      {events.map((events, id) => (
        <PingCard key={id} {...events} />
      ))}
    </div>
  );
};
export default EventCard;
