import axios from "axios";
import React, { useEffect, useState } from "react";

const DailyVibe = () => {
  const [vibe, setVibe] = useState("");
  const [author, setAuthor] = useState("");

  const vibesApi = async () => {
    let arrayOfVibes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfVibes = data.data;
    } catch (error) {}

    try {
      setVibe(arrayOfVibes.content);
      setAuthor(arrayOfVibes.author);
    } catch (error) {}
  };

  useEffect(() => {
    vibesApi();
  }, []);
  return (
    <div className="dailyVibe">
      <p className="pr-1">
        {vibe} <span> - {author}</span>
      </p>
    </div>
  );
};

export default DailyVibe;
