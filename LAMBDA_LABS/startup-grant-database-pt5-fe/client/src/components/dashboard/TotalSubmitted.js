import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Card } from "@material-ui/core";
import axios from "axios";

//import axios from 'axios';

//Need logic for adding totals
//Need endpoint to grab grant totals given to each user

const useStyles = makeStyles(theme => ({
  container: {
    height: "50%",
    width: "80%"
  },
  number: {
    fontSize: "15px"
  },
  divide: {
    display: "flex",
    padding: "10px"
  }
}));

const TotalSubmitted = props => {
  const { className, ...rest } = props;

  //Add logic/endpoints
  const [grantTotal, setGrantTotal] = useState([]);

  const userId = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/applications/recipient/${userId}`)
      .then(res => {
        console.log(res);
        setGrantTotal(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  const classes = useStyles();

  // if ((grantTotal = undefined)) {
  //   return <h1>Loading...</h1>;
  // } else {
  return (
    <Container className={classes.container}>
      <Card>
        <h2>Total Applications Submitted</h2>
        <div className={classes.divide}>
          <img src="images/icons/ClipBoardCheck.svg" alt="clipboard icon" />
          <h2 className={classes.number}>
            You have submitted {grantTotal.length} applications!
          </h2>
        </div>
      </Card>
    </Container>
  );
};
// };

export default TotalSubmitted;
