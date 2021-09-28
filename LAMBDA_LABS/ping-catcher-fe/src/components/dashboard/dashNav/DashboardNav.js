import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import NavContent from "./dashNavComponents/NavContent";

// import the appBar theme from page component
const DashNavbar = ({ style, darkMode, setDarkMode, handleDrawerToggle }) => {
  return (
    <AppBar className={style}>
      <Toolbar>
        <img
          src="/images/Ping_Catcher.png"
          alt="Ping Catcher"
          width="9%"
          onClick={handleDrawerToggle}
        />
        <NavContent darkMode={darkMode} setDarkMode={setDarkMode} />
      </Toolbar>
    </AppBar>
  );
};
export default DashNavbar;
