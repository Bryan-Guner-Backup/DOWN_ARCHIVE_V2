import React from "react";
import { useForm } from "react-hook-form";
import BackBttn from "../Buttons/BackBttn";
import NextBttn from "../Buttons/NextBttn";

const Standard = ({ user, handleChange }) => {
  const { register, handleSubmit, errors } = useForm({});

  const formGroup = "col-sm-12 col-md-4 form-group";

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row my-3">
          <div className={formGroup}>
            <label htmlFor="feet">Feet</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="feet"
              name="height_ft"
              placeholder="ft"
              defaultValue={user.height_ft}
              onChange={handleChange}
              ref={register({
                required: {
                  value: true,
                  message: "Please add height in feet",
                },
                maxLength: {
                  value: 1,
                  message: "Max length is 1",
                },
                max: {
                  value: 8,
                  message: "Max Value is 8",
                },
              })}
            />
            {errors.height_ft && (
              <small className="text-danger">{errors.height_ft.message}</small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="inches">Inches</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="inches"
              name="height_in"
              placeholder="in"
              defaultValue={user.height_in}
              onChange={handleChange}
              ref={register({
                required: {
                  value: true,
                  message: "Add inches",
                },
                maxLength: {
                  value: 2,
                  message: "Max length is 2",
                },
                max: {
                  value: 11,
                  message: "Max value is 11",
                },
              })}
            />
            {errors.height_in && (
              <small className="text-danger">{"Please add inches"}</small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="pounds">Pounds</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="pounds"
              name="weight_lbs"
              placeholder="lbs"
              defaultValue={user.weight_lbs}
              onChange={handleChange}
              ref={register({ required: true, maxLength: 3, max: 999 })}
            />
            {errors.weight_lbs && (
              <small className="text-danger">{"Please add weight"}</small>
            )}
          </div>
        </div>
        <NextBttn handleSubmit={handleSubmit} toPath="/weight-goals" />
        <BackBttn />
      </form>
    </>
  );
};

export default Standard;
