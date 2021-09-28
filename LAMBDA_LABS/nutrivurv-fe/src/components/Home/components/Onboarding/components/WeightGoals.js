import "rc-slider/assets/index.css";

import Slider from "rc-slider";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import BackBttn from "./Buttons/BackBttn";
import NextBttn from "./Buttons/NextBttn";
import OnBoardingImg from "./onBoarding-img";

const WeightGoals = ({ handleChange, user }) => {
  const { register, handleSubmit, control, errors } = useForm({});

  const marks = {
    0: "0 lbs/week (maintain weight)",
    1: "1 lbs/week",
    2: "2 lbs/week",
  };

  const [value, setValue] = useState(0);

  user.net_weekly_weight_change_lbs = value.toString();

  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-3">
        <h2 className="text-center pb-5 font-weight-bolder mt-5">
          Weight Goals{" "}
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form-group"
          role="form "
        >
          <label htmlFor="feet">Target Weight</label>
          <input
            className="rounded p-1 w-100 border border-primary"
            type="number"
            id="goalWeight"
            name="target_weight_lbs"
            placeholder="lbs."
            defaultValue={user.target_weight_lbs}
            onChange={handleChange}
            ref={register({
              required: {
                value: true,
                message: "Please add your goal weight in pounds (lbs.)",
              },
            })}
          />
          {errors.target_weight_lbs && (
            <small className="text-danger">
              {errors.target_weight_lbs.message}
            </small>
          )}
          <div className="mt-4">
            <label htmlFor="rate-of-weight-change">
              Rate of Weight Gain or Loss
            </label>
            <Controller
              name="net_weekly_weight_change_lbs"
              control={control}
              onChange={(value) => setValue(value)}
              as={
                <Slider
                  onUpdate={handleChange}
                  step={1}
                  max={2}
                  min={0}
                  vertical={false}
                  defaultValue=""
                  value={user.net_weekly_weight_change_lbs}
                  marks={marks}
                />
              }
            />
          </div>
          <NextBttn handleSubmit={handleSubmit} toPath="/register" />
          <BackBttn />
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};
export default WeightGoals;
