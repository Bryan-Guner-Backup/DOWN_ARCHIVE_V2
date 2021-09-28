import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ReactComponent as SignInImage } from "../../../assets/GirlComptr.svg";
import { authenticate } from "../../../state/slices/AuthSlice";
import Footer from "./LandingPage/components/Footer";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { authError, isAuthenticated } = useSelector((state) => state.auth);

  const { register, errors, handleSubmit } = useForm({});

  const onSubmit = () => {
    const creds = {
      email: user.email,
      password: user.password,
    };
    dispatch(authenticate(creds, "login"));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) return <Redirect to="/dashboard" />;

  return (
    <div>
      <div className="d-flex justify mt-4 mx-5" style={{ height: "950px" }}>
        <div className="mt-5 col-xl-3 pt-5">
          <h1 className="text-center pb-3 font-weight-bolder mt-5">
            {" "}
            Sign In{" "}
          </h1>
          <h4 className="text-center">
            Let&apos;s start crushing those goals!
          </h4>
          <h6 className="text-center pb-3 text-danger">{authError}</h6>
          <form data-toggle="validator" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="mb-0">E-mail</label>
              <input
                name="email"
                defaultValue={user.email}
                className="rounded p-3 w-100 border border-primary"
                id="inputEmail"
                placeholder="email@email.com"
                onChange={handleChange}
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="mb-0">Password</label>
              <input
                name="password"
                defaultValue={user.password}
                data-minlength="8"
                type="password"
                className="rounded p-3 w-100 border border-primary"
                id="inputPassword"
                onChange={handleChange}
                placeholder="8-12 Characters"
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
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="btn-primary rounded p-2 w-100 border border-primary"
              data-cy="submit"
            >
              Sign In
            </button>
          </form>
          <div className="d-flex justify-content-center mt-3 p-2">
            <p className="mr-2">
              Not a member? <Link to="/onboarding">Sign Up</Link>
            </p>
          </div>
        </div>
        <div>
          <SignInImage
            className=" d-none d-xl-block col img-responsive pb-5 pt-5 "
            alt="Responsive Sign In image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
