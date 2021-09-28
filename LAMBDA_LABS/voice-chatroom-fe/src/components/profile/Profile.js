import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const currentUser = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <div>
        <h3>
          {currentUser.username}
        </h3>{" "}
        <span>Location: {currentUser.location}</span>{" "}
        <span>Passion: {currentUser.interest_1}</span>
      </div>
      <section>
          <h3>Personal Info</h3>
      </section>
    </div>
  );
}
