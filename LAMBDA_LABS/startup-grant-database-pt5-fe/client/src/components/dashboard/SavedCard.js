import React from "react";
import { Card } from "@material-ui/core";
//Use moment to format date coming from BE
import Moment from "react-moment";

const SavedCard = props => {
  return (
    <Card>
      <h3>{props.grant.grant_title}</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex" }}>
          <p>
            {/* Due : <Moment format="YYYY/MM/DD">{props.grant.due_date}</Moment> */}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p>Amount: ${props.grant.grant_amount}</p>
        </div>
      </div>
    </Card>
  );
};

export default SavedCard;
