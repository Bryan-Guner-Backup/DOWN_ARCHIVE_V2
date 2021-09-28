import React, {useEffect, useState} from "react";
import Axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade, InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: fade(theme.palette.common.white, 0.25) },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: { color: "inherit" },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    marginTop:'0.5em',
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": { width: "20ch" },
    },
  },
}));

function SearchBoxNav({ slackState, setSlackState }) {
  const classes = useStyles();
  const [members, setMembers] = useState([]);
  const token = slackState?.authed_user?.access_token;

  useEffect(() => {
    console.log("SearchBoxNav");
    Axios.get(`https://slack.com/api/search.messages?token=${token}`)
      .then((res) => setMembers(res.data.members))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [ token ]);

  return (
    <>
      <div className={classes.shiftRight}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
    </>
  );
}
export default SearchBoxNav;