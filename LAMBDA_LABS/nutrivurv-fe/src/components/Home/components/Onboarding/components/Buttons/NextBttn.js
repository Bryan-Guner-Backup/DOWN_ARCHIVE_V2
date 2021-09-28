import React from "react";
import { useHistory } from "react-router-dom";

const NextBttn = ({ handleSubmit, toPath }) => {
  const history = useHistory();

  const onSubmit = async (data) => {
    history.push(`/onboarding${toPath}`);
  };

  return (
    <>
      <button
        data-cy="submit"
        type="submit"
        className="btn-primary rounded p-2 w-100 border border-primary"
        onClick={handleSubmit(onSubmit)}
      >
        Continue
      </button>
    </>
  );
};

export default NextBttn;
