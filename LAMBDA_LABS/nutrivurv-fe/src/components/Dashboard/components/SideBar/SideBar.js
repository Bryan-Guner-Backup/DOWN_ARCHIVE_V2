import "../../styles/_dashboard.scss";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import { NutrientEnd } from "../../../../state/slices/EdamamSlice";
import BudgetOverview from "./BudgetOverview";
import DailyVibe from "./DailyVibe";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <nav id="sidebar" className={toggle ? "sidebar-active" : "sidebar"}>
        <div className="d-flex justify-content-center exit">
          <h5 className="exit" onClick={() => setToggle(!toggle)}>
            X
          </h5>
        </div>
        <div className="d-flex justify-content-center my-3 ">
          <NavLink to="/" className="navbar-brand ">
            <Logo className="logo" />
          </NavLink>
        </div>
        <div>
          <div className="d-flex flex-column align-items-center my-2">
            <BudgetOverview user={user} />
            <div className="mb-1">
              <NavLink to="/dashboard/food-search" className="nav-link">
                <button
                  id="add-journal"
                  className=" journalBttn rounded p-2 btn-secondary"
                  style={{ width: "150px" }}
                >
                  Add to Journal
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="side-link mb-1 pl-4">
            <NavLink
              onClick={() => dispatch(NutrientEnd())}
              to="/dashboard"
              id="food"
              className="nav-link"
            >
              <h4 className="font-weight-bold">Food Journal</h4>
            </NavLink>
          </li>
          <li className="side-link mb-1 pl-4">
            <NavLink to="/" id="progress" className="nav-link">
              <h4 className="font-weight-bold">Progress</h4>
            </NavLink>
          </li>
          <li className="side-link mb-1 pl-4">
            <NavLink to="/" id="community" className="nav-link">
              <h4 className="font-weight-bold">Community</h4>
            </NavLink>
          </li>
        </ul>
        <div className="mt-1 pl-4">
          <h5 className="font-weight-bold">Daily Vibe</h5>
          <DailyVibe />
        </div>
      </nav>
      <div>
        <button type="button" className="navbar-light bg-light navbar-toggler">
          <span
            className="navbar-toggler-icon"
            onClick={() => setToggle(!toggle)}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
