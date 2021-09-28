import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

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
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingLeft: '10px'
  },
  menulink: {
    color: 'black',
    textTransform: 'capitalize',
    textDecoration: 'none'
  }
}))

function Navbar (props) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  function handleDrawerToggle () {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <List className={classes.list}>
        <Link to="/">
          <Button className={classes.menulink}>Home</Button>
        </Link>
        <Link to="/about">
          <Button className={classes.menulink}> About</Button>
        </Link>
      </List>
    </div>
  )
  return (
    <div className={classes.root} data-test="navbar-container">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className="logo"></div>
          <div className="title-and-button">
            <Typography variant="h6" noWrap>
              Niyon
            </Typography>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default Navbar
