import React from "react";
import { NavLinks } from "../dashboard/style";

const Logout = () => {
  return (
    <NavLinks to="/login">
      <button
        className="logout-button"
        type="submit"
        onClick={() => localStorage.clear}
      >
        Logout
      </button>
    </NavLinks>
  );
};

export default Logout;
