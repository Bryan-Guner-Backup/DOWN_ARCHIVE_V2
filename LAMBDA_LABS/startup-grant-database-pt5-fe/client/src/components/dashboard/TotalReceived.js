import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles2 = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

let ViewButton = props => {
  const classes = useStyles2();
  return (
    <div className={classes.root}>
      <Link to={`/grants`}>
        <Button variant="contained" color="primary" style={{ margin: "20px" }}>
          View applications
        </Button>
      </Link>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    height: "50%",
    width: "80%"
  },
  number: {
    fontSize: "15px",
    padding: "0px 30px"
  },
  divide: {
    display: "flex",
    padding: "10px"
  }
}));

const TotalReceived = props => {
  const { className, ...rest } = props;

  const [totalReceived, setTotalReceived] = useState([]);
  const userId = localStorage.getItem("id");
  console.log(userId, "userId");

  useEffect(() => {
    axios
      // get applications received based on grantorID
      .get(`${process.env.REACT_APP_API}/api/applications/grantor/${userId}`)
      .then(res => {
        console.log(res);
        setTotalReceived(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  console.log(totalReceived);

  const classes = useStyles();

  if (totalReceived.length === 0) {
    return (
      <Container className={classes.container}>
        <Card style={{ margin: "30px" }}>
          <h2>Total Applications Received</h2>
          <div className={classes.divide}>
            <img src="images/icons/ClipBoardCheck.svg" alt="clipboard icon" />
            <h2 className={classes.number}>
              {/* You haven't received any applications! */}
              You have received {totalReceived.length} applications!
            </h2>
          </div>
        </Card>
      </Container>
    );
  } else {
    return (
      <Container className={classes.container}>
        <Card style={{ margin: "30px" }}>
          <h2>Total Applications Received</h2>
          <div className={classes.divide}>
            <img src="images/icons/ClipBoardCheck.svg" alt="clipboard icon" />
            <h2 className={classes.number}>
              {/* You haven't received any applications! */}
              You have received {totalReceived.length} applications!
            </h2>
          </div>
          <div>
            <ViewButton />
          </div>
        </Card>
      </Container>
    );
  }
  // };
};

export default TotalReceived;
