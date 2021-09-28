import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../../state/slices/AuthSlice";

const Logout = () => {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (token === null) return <Redirect to="/" />;

  return (
    <div>
      <div className="dropdown d-flex justify-content-end px-5">
        <div>
          <h3 id="username" className="pr-3">
            {user.name}
          </h3>
        </div>
        <button
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          className="btn-primary dropdown-toggle rounded px-2 py-1 border border-primary"
        >
          <i className="fas fa-cog"></i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {/* <Link to="/dashboard/profile" className="dropdown-item" href="#">
            Edit Profile
          </Link> */}
          <button onClick={() => dispatch(logout())} className="dropdown-item">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
