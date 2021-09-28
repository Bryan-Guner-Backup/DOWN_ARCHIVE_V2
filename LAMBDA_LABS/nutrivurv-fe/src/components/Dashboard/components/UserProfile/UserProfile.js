import React, { useState } from "react";
import { useSelector } from "react-redux";
import Email from "./components/Email";
import Gender from "./components/Gender";
import Height from "./components/Height";
import Name from "./components/Name";
import WeeklyLoss from "./components/WeeklyLoss";
import Weight from "./components/Weight";
import WeightGoals from "./components/WeightGoals";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [users, setUser] = useState();
  function handleChange(e) {
    setUser({ ...users, [e.currentTarget.name]: e.currentTarget.value });
  }
  return (
    <div className="profile">
      <h1>Edit Your Profile</h1>
      <div>
        <div className="d-flex justify-content-center">
          <Name
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
          <Email
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
        </div>
        <div className="d-flex">
          <Gender
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
          <WeightGoals
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
          <Height
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Weight
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
          <WeeklyLoss
            handleChange={handleChange}
            user={user}
            users={users}
            setUser={setUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
