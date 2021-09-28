import React from 'react';
import SideBar from './SideBar';
import AccountDetails from './AccountDetails';
import Profile from './Profile';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '85vh'
  },
  div: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  components: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    paddingTop: '5%'
  }
}));

const Settings = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.div}>
        <SideBar />
        <div className={classes.components}>
          <Profile history={props.history} />
          <AccountDetails history={props.history} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
