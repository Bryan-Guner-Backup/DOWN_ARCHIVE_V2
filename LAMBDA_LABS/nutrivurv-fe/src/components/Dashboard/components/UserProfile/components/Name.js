import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Name = ({ user, users, setUser, handleChange }) => {
  const [name, setName] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  window.addEventListener("click", function (e) {
    setName(false);
  });

  return (
    <div className="profile-inputs p-5">
      <div>
        <h3>Name:</h3>
        {!name ? (
          <h4>
            {user.name}{" "}
            <i
              onClick={(e) => {
                setName(!name);
                e.stopPropagation();
              }}
              className="fas fa-edit"
            ></i>
          </h4>
        ) : (
          <div className="form-group">
            <input
              onClick={(e) => e.stopPropagation()}
              name="name"
              className="rounded p-3 w-100 border border-primary"
              placeholder="First and Last Name"
              onChange={handleChange}
              defaultValue={user.name}
              ref={register({
                required: "Required",
                pattern: {
                  value: /\b[^\d\W]+\b/g,
                  message: "Invalid name entry",
                },
              })}
            />
            {errors.name && (
              <small id="name-err" className="text-danger">
                {errors.name.message}
              </small>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Name;
