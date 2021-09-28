import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchBoxNav from "./SearchBox/SearchBox";
import ProfileMenu from "./ProfileMenu";
import { Switch as MuiSwitch } from "@material-ui/core";
import Sun from "@material-ui/icons/Brightness7";
import Moon from "@material-ui/icons/Brightness3";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  moveRight: {
    display: "flex",
    marginLeft: "auto",
  },
}));
function NavBarContent({ darkMode, setDarkMode }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.moveRight}>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MuiSwitch
            color="default"
            label="Toggle"
            value="Toggle"
            size="small"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div style={{ margin: "0 1rem" }}>
            <h3>{darkMode ? <Sun /> : <Moon />}</h3>
          </div>
        </div>
        <SearchBoxNav />
        <ProfileMenu />
      </div>
    </>
  );
}
export default NavBarContent;
