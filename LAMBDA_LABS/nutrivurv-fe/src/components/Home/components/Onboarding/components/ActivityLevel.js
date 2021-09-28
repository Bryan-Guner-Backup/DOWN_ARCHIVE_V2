import React from "react";
import { useForm } from "react-hook-form";
import BackBttn from "./Buttons/BackBttn";
import NextBttn from "./Buttons/NextBttn";
import OnBoardingImg from "./onBoarding-img";
const ActivityLevel = ({ handleChange, user }) => {
  const { errors, register, handleSubmit } = useForm();

  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="col-xl-5 mt-3">
        <h2 className="text-center pb-5 font-weight-bolder mt-5">
          How active are you?
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          // onSubmit={handleSubmit(onSubmit)}
          className="form-group"
        >
          <div className="mb-4">
            <input
              type="radio"
              id="ActivityLevel1"
              name="activity_level"
              className="control-input"
              onChange={handleChange}
              ref={register({ required: true })}
              value="1.375"
            />
            <label className="control-label" htmlFor="ActivityLevel1">
              <h4 className="ml-3">Not Very Active</h4>
              <p className="ml-3 info">
                Spend most of the day sitting (little to no exercise)
              </p>
            </label>
          </div>
          <div className="border-bottom mb-4"></div>

          <div className="mb-4 pt-3">
            <input
              type="radio"
              name="activity_level"
              id="activityLevel"
              className="control-input"
              onChange={handleChange}
              ref={register({ required: true })}
              value="1.55"
            />
            <label className="control-label" htmlFor="ActivityLevel2">
              <h4 className="ml-3">Lightly Active</h4>
              <p className="ml-3 info">
                Spend a good part of the day on your feet (light exercise 1-3
                days / week)
              </p>
            </label>
          </div>
          <div className="border-bottom mb-4"></div>

          <div className="mb-4 mt-3">
            <input
              type="radio"
              name="activity_level"
              id="ActivityLevel3"
              className="control-input"
              onChange={handleChange}
              ref={register({ required: true })}
              value="1.725"
            />
            <label className="control-label" htmlFor="ActivityLevel3">
              <h4 className="ml-3">Active</h4>
              <p className="ml-3 info">
                Spend a good part of the day doing some physical activity
                (moderate exercise 3-5 days / week)
              </p>
            </label>
          </div>
          <div className="border-bottom mb-4"></div>

          <div className="mb-4 mt-3">
            <input
              type="radio"
              name="activity_level"
              id="ActivityLevel4"
              className="control-input"
              onChange={handleChange}
              ref={register({ required: true })}
              value="1.9"
            />
            <label className="control-label" htmlFor="ActivityLevel4">
              <h4 className="ml-3">Very Active</h4>
              <p className="ml-3 info">
                Spend most of the day doing heavy physical activity (very
                strenuous exercise, or physical job daily)
              </p>
            </label>
          </div>
          {errors.activity_level && (
            <small className="text-danger">
              Activity level selection is required
            </small>
          )}
          <NextBttn handleSubmit={handleSubmit} toPath="/bmi" />
          <BackBttn />
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};

export default ActivityLevel;
