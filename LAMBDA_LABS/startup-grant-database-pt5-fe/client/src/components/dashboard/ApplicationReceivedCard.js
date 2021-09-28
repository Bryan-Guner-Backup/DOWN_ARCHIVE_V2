import React from "react";
import { Card } from "@material-ui/core";

//pull grant information as well, pull user information as well

//{props.application.grant_name}

// {props.application.first_name}{" "}
// {props.application.last_name}

const ApplicationReceivedCard = props => {
  return (
    <Card>
      <h3>The Nature Grant (EG)</h3>
      <div>
        <div>
          <p>Applicant:</p>
        </div>
        <div>
          <p>Status: {props.application.status}</p>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationReceivedCard;
