import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Gender = ({ user, handleChange }) => {
  const [gender, setGender] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  window.addEventListener("click", function (e) {
    setGender(false);
  });

  return (
    <div className="p-5 profile-inputs">
      <div>
        <h3>Gender:</h3>
        {!gender ? (
          <h4>
            {user.gender}{" "}
            <i
              onClick={(e) => {
                setGender(!gender);
                e.stopPropagation();
              }}
              className="fas fa-edit"
            ></i>
          </h4>
        ) : (
          <div className="form-group">
            <select
              className="py-3 px-2 w-50"
              id="gender"
              name="gender"
              onClick={(e) => e.stopPropagation()}
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
        )}
      </div>
    </div>
  );
};

export default Gender;
