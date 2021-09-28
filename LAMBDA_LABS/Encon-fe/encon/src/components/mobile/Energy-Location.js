import React from "react";
import "../../styles/mobile/Energy-Location.scss";

export const EnergyLocation = (props) => {
  const loc = localStorage.getItem("USER_LOCATION");

  return (
    <div className="energyLocation">
      <div className="energyContainer">
        <h2>My Energy</h2>
      </div>

      <div className="locationContainer">
        <h5>
          Location: {loc} <a href="/">(change)</a>
        </h5>
      </div>
    </div>
  );
};
