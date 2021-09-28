import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import ApplicationReceivedCard from "./ApplicationReceivedCard";

import axios from "axios";

//Need endpoint to grab grant applications by grantor

const useStyles = makeStyles(theme => ({
  container: {
    padding: "40px 0"
  }
}));

const ApplicationReceived = props => {
  const { className, ...rest } = props;

  //add endpoints
  const [received, setReceived] = useState([]);

  //fix endpoint and setReceived

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/applications/:id`)
      .then(res => {
        console.log(res);
        setReceived(res.data);
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
        <h2>Applications Received</h2>
        <h3>You haven't received any applications!</h3>
      </Container>
    );
  } else {
    return (
      <Container className={classes.container}>
        <h2>Applications Received</h2>
        {received.slice(0, 4).map(items => {
          return (
            <Link to={`/applications/${items.id}`}>
              <ApplicationReceivedCard key={items.id} grant={items} />
            </Link>
          );
        })}
      </Container>
    );
  }
};

export default ApplicationReceived;
