import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Email = ({ user, handleChange }) => {
  const [email, setEmail] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  window.addEventListener("click", function (e) {
    setEmail(false);
  });

  return (
    <div className="p-5 profile-inputs">
      <div>
        <h3>Email:</h3>
        {!email ? (
          <h4>
            {user.email}{" "}
            <i
              onClick={(e) => {
                setEmail(!email);
                e.stopPropagation();
              }}
              className="fas fa-edit"
            ></i>
          </h4>
        ) : (
          <div className="form-group">
            <input
              name="email"
              onClick={(e) => e.stopPropagation()}
              className="rounded p-3 w-100 border border-primary"
              placeholder="email@email.com"
              onChange={handleChange}
              defaultValue={user.email}
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && (
              <small id="emailErr" className="text-danger">
                {errors.email.message}
              </small>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;
