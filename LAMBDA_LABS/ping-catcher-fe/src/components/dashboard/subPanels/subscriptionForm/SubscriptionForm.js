import React from "react";
import RankingForm from "../../../../components/RankingForm.js";

const SubscriptionForm = ({ slackState }) => {
  return (
    <>
      <div style={{ marginLeft: "25%", marginTop: "5%" }}>
        <h1>Configure a Subscription</h1>
        <RankingForm slackState={slackState} />
      </div>
    </>
  );
};
export default SubscriptionForm;