import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import axios from 'axios';
import DropZone from './DropZone';

const firebase = require('firebase/app');
require('firebase/auth');

const useStyles = makeStyles(() => ({
  root: {},
  card: {
    width: '40%',
    margin: '0 2%',
    height: '30%'
  },
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 100,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: '10px'
  },
  uploadButton: {
    marginRight: '10px'
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}));

const AccountProfile = props => {
  const { className, files, ...rest } = props;

  const [values, setValues] = useState([]);
  const [avartarURL, setavartarURL] = useState('');

  const id = localStorage.getItem('id');

  useEffect(() => {
    const fetchAll = async () => {
      //Fetch
      const userResult = await axios(
        `${process.env.REACT_APP_API}/api/users/${id}`
      );
      let userdata = userResult.data.accountData;
      setValues(userdata);
    };

    const getAvatar = () => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          let pic = user.photoURL;
          // console.log('Avatar', user);
          setavartarURL(pic);
        } else {
          console.log("Error setting profile pic", user);
        }
      });
    };
    getAvatar();
    fetchAll();
  }, []);

  const classes = useStyles();
  // const user = {
  //   name: "Claire Sinozich",
  //   state: "Colorado",
  //   country: "USA",
  //   timezone: "GTM-7",
  //   avatar: "/images/avatars/headshot.jpg"
  // };

  const first = values[0];

  // console.log("first", first);

  if (first === undefined) {
    return null;
  } else {
    return (
      <Card {...rest} className={(classes.root, classes.card)}>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography gutterBottom variant="h4">
                {first.first_name} {first.last_name}
              </Typography>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="body1"
              >
                {first.address_one}
                <br />
                {first.address_two}
                <br />
                {first.zip_code}
              </Typography>
            </div>

            {/* <AccountCircleIcon className={classes.avatar} /> */}
            <Avatar alt="avatar" src={avartarURL} className={classes.avatar} />
          </div>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          {/* custom component to upload photos */}
          <DropZone history={props.history} />
          {/* <Button variant="text">Upload picture</Button> */}
          {/* <Button variant="text">Remove picture</Button> */}
        </CardActions>
      </Card>
    );
  }
};

export default AccountProfile;
