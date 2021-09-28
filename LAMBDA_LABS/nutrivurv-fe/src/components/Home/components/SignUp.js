import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { authenticate } from "../../../state/slices/AuthSlice";
import BackBttn from "./Onboarding/components/Buttons/BackBttn";
import OnBoardingImg from "./Onboarding/components/onBoarding-img";

const SignUp = ({ handleChange, user }) => {
  const dispatch = useDispatch();
  const { authError, isAuthenticated } = useSelector((state) => state.auth);
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});

  password.current = watch("password", "");

  const weightToImperial = (kg) => {
    return Math.round(kg * 2.205);
  };

  const heightToImperial = (cm) => {
    const totalInches = cm / 2.54;
    const height_ft = Math.floor(totalInches / 12);
    const height_in = Math.round(totalInches - height_ft * 12);

    return {
      height_ft,
      height_in,
    };
  };

  const onSubmit = () => {
    if (user.standard !== "true") {
      const { height_ft, height_in } = heightToImperial(user.height_cm);
      user.weight_lbs = weightToImperial(user.weight_kg);
      user.height_ft = height_ft;
      user.height_in = height_in;
    }

    user.net_weekly_weight_change_lbs =
      user.net_weekly_weight_change_lbs *
      (Number(user.target_weight_lbs < user.weight_lbs) ? -1 : 1);

    delete user.standard;
    delete user.height_cm;
    delete user.weight_kg;

    dispatch(authenticate(user, "register"));
  };

  if (isAuthenticated) return <Redirect to="/dashboard" />;

  return (
    <div>
      <div
        className="d-flex justify mt-5 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
        style={{ height: "950px" }}
      >
        <div className="col-xl-3 pt-5">
          <h1 className="text-center pb-3 font-weight-bolder">Sign Up</h1>
          <h4 className="text-center">
            You&apos;re one step closer to your goals!
          </h4>
          <h6 className="text-center pb-3 text-danger">{authError}</h6>
          <form data-toggle="validator" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="mb-0">Your Name</label>
              <input
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

            <div className="form-group">
              <label className="mb-0">E-mail</label>
              <input
                name="email"
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

            <div className="form-group">
              <label className="mb-0">Password</label>
              <input
                name="password"
                className="rounded p-3 w-100 border border-primary"
                placeholder="8-12 characters"
                onChange={handleChange}
                type="password"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password cannot have more than 12 characters",
                  },
                })}
              />
              {errors.password && (
                <small id="pwordErr" className="text-danger">
                  {errors.password.message}
                </small>
              )}
            </div>

            <div className="form-group mb-5">
              <label className="mb-0">Confirm Password</label>
              <input
                name="password_repeat"
                placeholder="Confirm Password"
                className="rounded p-3 w-100 border border-primary"
                type="password"
                ref={register({
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.password_repeat && (
                <small id="pword2Err" className="text-danger">
                  {errors.password_repeat.message}
                </small>
              )}
            </div>
            <button
              data-cy="submit"
              type="submit"
              className="btn-primary rounded p-2 w-100 border border-primary"
              onClick={handleSubmit(onSubmit)}
            >
              Continue
            </button>
            <BackBttn />
          </form>
          <div className="d-flex justify-content-center mt-3 p-2">
            <p className="mr-2"> Already a member? </p>
            <Link to="/signin"> Sign In </Link>
          </div>
        </div>
        <OnBoardingImg />
      </div>
    </div>
  );
};

export default SignUp;
