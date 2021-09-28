import React from "react";
import OnBoardingImg from "./onBoarding-img";

const GettingStarted = ({ history, match }) => {
  return (
    <div
      className="d-flex justify-content-center mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "750px" }}
    >
      <div className="mt-5 mr-5 col-xl-5 pt-5">
        <h1 className="p-2 mt-4 text-center">Let's Get Started!</h1>
        <h4 className="p-2 text-center">
          Staying on target with your weight and dietary goals can be difficult!
        </h4>
        <h4 className="p-2 text-center">
          Nutrivurv makes achieving those goals easier by curating a custom
          experience tailored to <strong>you</strong>.
        </h4>
        <h4 className="p-2 text-center">
          The information collected in the next few screens will be used to
          calculate daily caloric and macro-nutrient budget to help you stay on
          track.
        </h4>
        <div className="row justify-content-center">
          <button
            type="button"
            id="getStarted"
            className="btn-primary rounded p-2 mt-3 w-50 border border-primary"
            onClick={() => history.push(`${match.path}/getting-personal`)}
          >
            Continue
          </button>
        </div>
      </div>
      <OnBoardingImg />
    </div>
  );
};

export default GettingStarted;
