import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0
  },
  buttons: {
    margin: '20% auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10px'
  },
  button: {
    width: '250px',
    borderRadius: '50px',
    height: '50px',
    margin: '15px 0',
    textTransform: 'capitalize'
  },
  titleandbutton: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}))

function Header (props) {
  const classes = useStyles()
  const userType = window.localStorage.getItem('user_type')
  return (
    <div className={classes.root} data-test="header-container">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <div className="logo" data-test="logo"></div>
          </Link>
          <div className={classes.titleandbutton} data-test="title-and-button">
            <Typography variant="h6">
              Welcome, {userType}!
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
