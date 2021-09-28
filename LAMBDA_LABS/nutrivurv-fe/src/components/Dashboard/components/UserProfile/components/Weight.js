import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Weight = ({ user, users, setUser, handleChange }) => {
  const [weight, setWeight] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  window.addEventListener("click", function () {
    setWeight(false);
  });

  return (
    <div className="profile-inputs p-5">
      <div>
        <h3>Weight:</h3>
        {!weight ? (
          <h4>
            {user.weight_lbs}{" "}
            <i
              onClick={(e) => {
                setWeight(!weight);
                e.stopPropagation();
              }}
              className="fas fa-edit"
            ></i>
          </h4>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
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
          </form>
        )}
      </div>
    </div>
  );
};

export default Weight;
