import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Container, Card } from "@material-ui/core";

import axios from "axios";

import NewCard from "./NewCard";

const useStyles = makeStyles(() => ({}));

const New = props => {
  const { className, ...rest } = props;

  const [newGrants, setNewGrants] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/grants`)
      .then(res => {
        console.log(res);
        setNewGrants(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  },[]);

  const classes = useStyles();

  // const grant = [
  //   {
  //     id: 1,
  //     name: "This is the name of a grant",
  //     duedate: "10/23/17",
  //     amount: "5000"
  //   },
  //   {
  //     id: 2,
  //     name: "this is grant #2",
  //     duedate: "10/11/11",
  //     amount: "6345"
  //   }
  // ];

  if (newGrants == undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container style={{ backgroundColor: "#F0FDFE", height: "100%" }}>
        <h2>New Grants for You</h2>
        {newGrants.slice(0, 4).map(items => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#000000" }}
              to={`/search/${items.id}`}
            >
              <NewCard key={items.id} grant={items} />
            </Link>
          );
        })}
      </Container>
    );
  }
};

export default New;
