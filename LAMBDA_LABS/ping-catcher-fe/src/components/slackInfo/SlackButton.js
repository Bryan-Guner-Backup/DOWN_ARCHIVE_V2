import React from "react";

const clientID = process.env.REACT_APP_SLACK_CLIENT_ID;

const SlackButton = () => {
  return (
    <div>
      <a
        href={`https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=${clientID}`}
      >
        <img
          src="https://api.slack.com/img/sign_in_with_slack.png"
          alt="slack button"
        />
      </a>
    </div>
  );
};

export default SlackButton;
