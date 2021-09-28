import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import { useForm } from "react-hook-form";
import BackBttn from "./Buttons/BackBttn";
import NextBttn from "./Buttons/NextBttn";
import OnBoardingImg from "./onBoarding-img";

const GettingPersonal = ({ user, handleChange }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-5">
        <h1 className="text-center pb-5 font-weight-bolder mt-5">
          Getting Personal
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group d-block">
            <div>
              <label className="mb-0">What's your date of birth?</label>
            </div>
            <div>
              <input
                type="date"
                className="py-3 px-2 w-100 rounded border border-primary"
                name="date_of_birth"
                defaultValue={user.date_of_birth}
                onChange={handleChange}
                ref={register({
                  required: {
                    value: true,
                    message: "required",
                  },
                })}
              />
              {errors.date_of_birth && (
                <small className="text-danger form-text">
                  {errors.date_of_birth.message}
                </small>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="mb-0">How do you identify?</label>
            <select
              className="py-3 px-2 w-100 rounded border border-primary"
              id="gender"
              name="gender"
              onChange={handleChange}
              defaultValue={user.gender}
              ref={register({
                required: {
                  value: true,
                  message: "required",
                },
              })}
            >
              <option disabled value="">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <small className="text-danger form-text">
                {errors.gender.message}
              </small>
            )}
          </div>
          <NextBttn handleSubmit={handleSubmit} toPath="/activity-level" />
          <BackBttn />
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};

export default GettingPersonal;
