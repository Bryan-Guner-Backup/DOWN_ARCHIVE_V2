import React from "react";
import { useForm } from "react-hook-form";
import BackBttn from "../Buttons/BackBttn";
import NextBttn from "../Buttons/NextBttn";

const Metric = ({ user, handleChange }) => {
  const { register, handleSubmit, errors } = useForm();

  const formGroup = "col-sm-12 col-md-4 form-group";

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row my-3">
          <div className={formGroup}>
            <label htmlFor="centimeters">Centimeters</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="centimeters"
              name="height_cm"
              placeholder="cm"
              defaultValue={user.height_cm}
              onChange={handleChange}
              ref={register({
                required: {
                  value: true,
                  message: "Please add height in Centimeters",
                },
                maxLength: {
                  value: 3,
                  message: "Max character length is 3",
                },
              })}
            />
            {errors.height_cm && (
              <small className="text-danger">{errors.height_cm.message}</small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="kilograms">kilograms</label>
            <input
              className="rounded p-1 w-100 border border-primary"
              type="number"
              id="kilograms"
              name="weight_kg"
              placeholder="kg"
              defaultValue={user.weight_kg}
              onChange={handleChange}
              ref={register({
                required: {
                  value: true,
                  message: "Please add weight in Kilograms",
                },
                maxLength: {
                  value: 3,
                  message: "Max character limit is 3",
                },
              })}
            />
            {errors.weight_kg && (
              <small className="text-danger">{errors.weight_kg.message}</small>
            )}
          </div>
        </div>
        <NextBttn handleSubmit={handleSubmit} toPath="/weight-goals" />
        <BackBttn />
      </form>
    </>
  );
};

export default Metric;
