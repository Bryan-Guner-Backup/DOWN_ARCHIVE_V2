import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Height = ({ user, handleChange }) => {
  const [height, setHeight] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  window.addEventListener("click", function (e) {
    setHeight(false);
  });

  const formGroup = "col-sm-12 col-md-4 form-group";

  return (
    <div className="profile-inputs p-5">
      <h3>Height:</h3>
      {!height ? (
        <h4>
          {user.height_ft} <small>ft</small> {user.height_in} <small>in</small>
          <i
            onClick={(e) => {
              setHeight(!height);
              e.stopPropagation();
            }}
            className="fas fa-edit"
          ></i>
        </h4>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row my-3">
            <div className={formGroup}>
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
                <small className="text-danger">
                  {errors.height_ft.message}
                </small>
              )}
            </div>
            <div className={formGroup}>
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
          </div>
        </form>
      )}
    </div>
  );
};

export default Height;
