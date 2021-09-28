import React from "react";
import { Card } from "@material-ui/core";
import Moment from "react-moment";

//pull grant information as well: {props.application.grant_amount}

const ApplicationCard = props => {
  return (
    <Card>
      <h3>{props.application.grant_title}</h3>
      <div style={{ display: "flex" }}>
        <p>
          Created :{" "}
          <Moment format="YYYY/MM/DD">{props.application.created_at}</Moment>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex" }}>
          <p>Amount: </p>
          <p>Status: {props.application.status}</p>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationCard;
