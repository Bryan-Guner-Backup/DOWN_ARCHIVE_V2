import React from "react";
import { useForm } from "react-hook-form";
import OnBoardingImg from "../on-boarding/onBoarding-img";

const DietaryPref = ({ setStep, handleChange, user }) => {
  const { errors, register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setStep("BMI");
  };
  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-3">
        <h2 className="text-center pb-5 font-weight-bolder mt-5">
          Dietary Preference{" "}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-group"
          role="form "
        >
          <div className="mb-4">
            <input
              type="radio"
              name="dietaryPref"
              id="diet1"
              value="0"
              className="control-input"
              onChange={handleChange}
              ref={register({ required: true })}
            />

            <label className="control-label" htmlFor="Keto Dietary Preference">
              <h4 className="ml-3">Keto</h4>
            </label>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              name="dietaryPref"
              id="diet2"
              value="1"
              className="control-input"
              onChange={handleChange}
              ref={register({ required: true })}
            />
            <label className="control-label" htmlFor="Paleo Dietary Preference">
              <h4 className="ml-3">Paleo</h4>
            </label>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              name="dietaryPref"
              id="diet3"
              value="2"
              className="control-input"
              onChange={handleChange}
              ref={register({ required: true })}
            />
            <label
              className="control-label"
              htmlFor="US Gov. Nutrition Guideline Dietary Preference"
            >
              <h4 className="ml-3">US Gov. Nutrition Guidelines</h4>
            </label>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              name="dietaryPref"
              id="diet4"
              value="3"
              className="control-input"
              onChange={handleChange}
              ref={register({ required: true })}
            />
            <label className="control-label" htmlFor="None">
              <h4 className="ml-3">None</h4>
            </label>
          </div>
          {errors.dietaryPref && (
            <small className="text-danger">
              Dietary preference selection is required
            </small>
          )}
          <button
            type="submit"
            className="btn-primary rounded p-2 w-100 border border-primary mt-2"
          >
            Next
          </button>
          <button
            onClick={() => setStep("ActivityLevel")}
            className="mt-3 btn-secondary rounded p-2 w-100"
          >
            Back
          </button>
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};

export default DietaryPref;
