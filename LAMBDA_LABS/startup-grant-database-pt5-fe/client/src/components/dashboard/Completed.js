import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

import ApplicationReceivedCard from "./ApplicationReceivedCard";

import axios from "axios";

//need endpoint to grab applications by grantee

const useStyles = makeStyles(theme => ({
  container: {
    height: "80%"
  }
}));

const Completed = props => {
  const { className, ...rest } = props;

  //add endpoints
  const [applications, setApplications] = useState([]);

  //fix endpoint and setApplications

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/applications/:id`)
      .then(res => {
        console.log(res);
        setApplications(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  const classes = useStyles();
  if (received === undefined) {
    return <h1>Loading...</h1>;
  } else if (received.length === 0) {
    return (
      <Container className={classes.container}>
        <h2>Completed Applications</h2>
        <h3>You haven't completed any applications!</h3>
      </Container>
    );
  } else {
    return (
      <Container className={classes.container}>
        <h2>Completed Applications</h2>
        {applications.map(items => {
          return (
            <Link to={`/applications/${items.id}`}>
              <ApplicationReceivedCard key={items.id} application={items} />
            </Link>
          );
        })}
      </Container>
    );
  }
};

export default Completed;
