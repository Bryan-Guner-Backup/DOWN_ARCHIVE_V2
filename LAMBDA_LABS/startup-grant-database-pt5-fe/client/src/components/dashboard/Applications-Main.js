import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

import ApplicationCard from "./ApplicationCard";

import axios from "axios";

//need endpoint to grab applications by grantee

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#F0FDFE",
    height: "100vh"
  },
  container: {
    height: "80%"
  }
}));

const ApplicationsMain = props => {
  const { className, ...rest } = props;

  //add endpoints
  const [applications, setApplications] = useState([]);

  //fix endpoint and setApplications
  const userId = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/applications/recipient/${userId}`)
      .then(res => {
        console.log(res);
        setApplications(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  const classes = useStyles();
  if (applications === undefined) {
    return <h1>Loading...</h1>;
  } else if (applications.length === 0) {
    return (
      <div className={classes.root}>
        <SideBar />
        <Container className={classes.container}>
          <h2>Your Applications</h2>
          <h3>You haven't applied to any grants!</h3>
        </Container>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <SideBar />
        <Container className={classes.container}>
          <h2>Your Applications</h2>
          {applications.map(items => {
            return (
              <Link to={`/applications/${items.id}`}>
                <ApplicationCard key={items.id} application={items} />
              </Link>
            );
          })}
        </Container>
      </div>
    );
  }
};

export default ApplicationsMain;
