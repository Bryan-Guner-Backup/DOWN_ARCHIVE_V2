import React from "react";
import "./applyForm.css";
import ApplyFormBackground from "../applyForm/ApplyFormBackground";
import ApplyFormTextFields from "../applyForm/ApplyFormTextFields";

let ApplyForm = props => {
  const { grant_id } = props.match.params;

  if (!grant_id) {
    props.history.push("/search");
  }

  return (
    <div className="applyFormContainer">
      <div className="applyFormBackground">
        <ApplyFormBackground>
          <ApplyFormTextFields grant_id={grant_id} />
        </ApplyFormBackground>
      </div>
    </div>
  );
};

export default ApplyForm;
