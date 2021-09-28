import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Weight = ({ user, users, setUser, handleChange }) => {
  const [weight, setWeight] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  window.addEventListener("click", function (e) {
    setWeight(false);
  });

  return (
    <div className="p-5 profile-inputs">
      <h3>Targeted Weight:</h3>
      {!weight ? (
        <h4>
          {user.target_weight_lbs}{" "}
          <i
            onClick={(e) => {
              setWeight(!weight);
              e.stopPropagation();
            }}
            className="fas fa-edit"
          ></i>
        </h4>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="form-group">
          <input
            onClick={(e) => e.stopPropagation()}
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
        </form>
      )}
    </div>
  );
};

export default Weight;
