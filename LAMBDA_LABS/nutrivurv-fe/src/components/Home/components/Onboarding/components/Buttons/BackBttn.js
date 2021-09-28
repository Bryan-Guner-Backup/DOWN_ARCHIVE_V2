import React from "react";
import { useHistory } from "react-router-dom";

const BackBttn = () => {
  const history = useHistory();
  return (
    <button
      onClick={() => history.goBack()}
      className="mt-3 btn-secondary rounded p-2 w-100"
    >
      Back
    </button>
  );
};

export default BackBttn;
