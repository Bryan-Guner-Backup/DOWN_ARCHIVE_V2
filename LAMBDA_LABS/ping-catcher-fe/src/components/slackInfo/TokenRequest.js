import React, { useEffect } from "react";
import Axios from "axios";

const TokenRequest = ({ slackState, setSlackState }) => {
  useEffect(() => {
    const code = slackState.slice(6).split("&state=")[0];

    Axios.get(
      `https://slack.com/api/oauth.v2.access?client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}&client_secret=${process.env.REACT_APP_SLACK_CLIENT_SECRET}&code=${code}
`
    )
      .then((res) => setSlackState(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>Token Request</div>;
};

export default TokenRequest;
