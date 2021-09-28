import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import axios from 'axios';

import SavedCard from './SavedCard';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: '#000000'
  }
}));

const Saved = props => {
  const id = localStorage.getItem('id');

  const [savedGrants, setSavedGrants] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const savedGrants = await axios(
        `${process.env.REACT_APP_API}/api/savedgrants/${id}`
      );
      setSavedGrants(savedGrants.data);
    };
    fetchAll();
  }, []);

  const classes = useStyles();

  if (savedGrants === undefined) {
    return <h1>Loading...</h1>;
  } else if (savedGrants.length === 0) {
    return (
      <Container>
        <h2>Saved Grants</h2>
        <h3>You don't have any saved grants!</h3>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Saved Grants</h2>
        {savedGrants.map(items => {
          return (
            <Link className={classes.link} to={`/search/${items.id}`}>
              <SavedCard key={items.id} grant={items} />
            </Link>
          );
        })}
      </Container>
    );
  }
};

export default Saved;
