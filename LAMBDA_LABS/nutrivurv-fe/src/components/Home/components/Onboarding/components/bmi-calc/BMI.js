import React, { useEffect, useState } from "react";
import OnBoardingImg from "../onBoarding-img";
import Metric from "./metric";
import Standard from "./standard";

const BMI = ({ setUser, user, handleChange }) => {
  const [bmi, setBmi] = useState(0);

  const calcStandardBMI = () => {
    let totalInches = Number(user.height_ft) * 12 + Number(user.height_in);

    return (
      Math.round((user.weight_lbs / (totalInches * totalInches)) * 703 * 10) /
      10
    );
  };

  const calcMetricBMI = () => {
    let meters = Number(user.height_cm) / 100;
    let height = meters * meters;

    return Math.round((Number(user.weight_kg) / height) * 10) / 10;
  };

  useEffect(() => {
    if (user.standard === "true") {
      setBmi(calcStandardBMI());
    } else {
      setBmi(calcMetricBMI());
    }
  }, [user]);

  return (
    <section
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-3">
        <h2 className="text-center pb-5 font-weight-bolder mt-5">
          Enter Height & Weight
        </h2>
        <div className="mt-4">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button
              name="standard"
              value={true}
              type="button"
              onClick={handleChange}
              className={`btn ${
                user.standard === "true" ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              Standard
            </button>
            <button
              name="standard"
              value={false}
              type="button"
              onClick={handleChange}
              className={`btn ${
                user.standard === "false"
                  ? "btn-primary "
                  : "btn-outline-primary"
              }`}
            >
              Metric
            </button>
          </div>
          {user.standard === "true" ? (
            <Standard
              bmi={bmi}
              setBmi={setBmi}
              setUser={setUser}
              user={user}
              handleChange={handleChange}
            />
          ) : (
            <Metric
              bmi={bmi}
              setBmi={setBmi}
              setUser={setUser}
              user={user}
              handleChange={handleChange}
            />
          )}
          <h5>
            Your BMI:{" "}
            <span className="text-info">{isNaN(bmi) ? "0" : bmi}</span>
          </h5>
        </div>
        <div className="text-muted mt-3">
          <h5>BMI Categories:</h5>
          <p>
            <small>
              Underweight = 18.5
              <br />
              Normal Weight = 18.5 - 24.9
              <br />
              Overweight = 25 - 29.9
              <br />
              Obese = BMI of 30 or greater
            </small>
          </p>
        </div>
      </div>
      <OnBoardingImg />
    </section>
  );
};

export default BMI;
