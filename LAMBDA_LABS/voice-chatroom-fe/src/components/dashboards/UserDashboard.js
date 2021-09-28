import React, { useState } from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import StarRatingComponent from "react-star-rating-component";

import UserHeader from "./UserHeader";

import "react-calendar/dist/Calendar.css";

import "../../sass/userDashboard.scss";

function UserDashboard() {
  const [date, setDate] = useState(new Date());
  // const [interests, setInterests] = useState([]);
  const currentUser = useSelector((state) => state.authReducer.user);
  const [interests, setInterests] = useState([
    currentUser.interest_1,
    currentUser.interest_2,
    currentUser.interest_3,
  ]);
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="dash-container">
      <div className="top-left">
        <UserHeader user={currentUser} />
        Your Rating:{" "}
        <StarRatingComponent
          name="userRating"
          starCount={5}
          value={currentUser.rating}
        />
      </div>
      <div className="top-right">
        <Calendar class="calendar" onChange={onChange} value={date} />
      </div>

      {/* {interests.forEach((item) => item)} */}
    </div>
  );
}
export default UserDashboard;
