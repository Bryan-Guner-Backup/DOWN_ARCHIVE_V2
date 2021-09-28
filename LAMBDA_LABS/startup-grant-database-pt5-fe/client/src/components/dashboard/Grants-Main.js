import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import GrantorSideBar from "./GrantorSideBar";
import GrantCard from "./GrantCard";
import axios from "axios";

//need endpoint to grab grants by grantor

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#F0FDFE",
    height: "100vh"
  },
  container: {
    height: "80%"
  }
}));

const GrantsMain = props => {
  const { className, ...rest } = props;

  const [grants, setGrants] = useState([]);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/applications/grantor/${userId}`)
      .then(res => {
        setGrants(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  console.log(grants, "grants");

  const classes = useStyles();
  if (grants === undefined) {
    return <h1>Loading...</h1>;
  } else if (grants.length === 0) {
    return (
      <div className={classes.root}>
        <GrantorSideBar />
        <Container className={classes.container}>
          <h2>Your Applications</h2>
          <h3>You haven't created any grants!</h3>
        </Container>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <GrantorSideBar />
        <Container className={classes.container}>
          <h2>Your Applications</h2>
          {grants.map(items => {
            return (
              // <Link to={`/grants/${items.id}`}>
              <GrantCard key={items.id} grant={items} userId={items.user_id} />
              /* </Link> */
            );
          })}
        </Container>
      </div>
    );
  }
};

export default GrantsMain;
