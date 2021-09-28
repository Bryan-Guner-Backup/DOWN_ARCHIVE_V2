import React from "react";

import SlackButton from "./slackInfo/SlackButton.js";

const SlackSignIn = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column wrap",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SlackButton />
    </div>
  );
};

export default SlackSignIn;
