import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LandingImage } from "../../../../../assets/Splash.svg";

const Marketing = () => {
  return (
    <div className="marketing" style={{ marginBottom: "20vh" }}>
      <section className="pl-lg-5">
        <div className="py-5 pl-5 ml-xl-5 mb-2">
          <h1 className="font-weight-bold mt-3 text-responsive mb-3 ml-xl-5 pl-xl-5">
            Tracking your calories
            <br />
            just got easier.
          </h1>
          <p className="second-text-responsive mb-3 ml-xl-5 pl-xl-5">
            Nutrivurv is an easy to use motivating <br />
            food and nutrition tracking app.
          </p>
          <Link type="button" to="/onboarding" className="pl-xl-5">
            <button
              id="onboarding-button"
              className="btn btn-primary ml-xl-5"
              style={{ width: "15rem" }}
            >
              Sign Up
            </button>
          </Link>
        </div>
        <figure className="mt-1 ml-5 pb-5">
          <LandingImage className="lp-img pl-5 pl-lg-0 ml-xl-n5" />
        </figure>
      </section>
    </div>
  );
};

export default Marketing;
