import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import Menu from '@material-ui/core/Menu'
import { signOut } from '../apiStuff/signout'
import MenuItem from '@material-ui/core/MenuItem'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import { DarkModeContext } from '../../DarkModeContext'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    color: 'primary',
    display: 'flex',
    justifyContent: 'flex-start',
    zIndex: 10
  },
  menuItem: {
    margin: '0 -10px !important'
  }
})

function Footer (props) {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setDarkMode(!darkMode)}>
          <Brightness4Icon />
          <div>&nbsp;Dark Mode</div>
        </MenuItem>
        <MenuItem onClick={(e) => signOut(e)}>
          <ExitToAppIcon />
          <div>&nbsp;Log Out</div>
        </MenuItem>
      </Menu>
      <BottomNavigation value={props.value} showLabels className={classes.root}>
        <BottomNavigationAction
          component={Link}
          to="/home"
          label="Home"
          icon={<HomeIcon />}
          className={classes.menuItem}
        />
        <BottomNavigationAction
          component={Link}
          to="/profile"
          label="Profile"
          icon={<PersonIcon />}
          className={classes.menuItem}
        />
        <BottomNavigationAction
          component={Link}
          to="/search"
          label="Search"
          icon={<SearchIcon />}
          className={classes.menuItem}
        />
        <BottomNavigationAction
          component={Link}
          to="/news"
          label="News"
          icon={<MenuBookIcon />}
          className={classes.menuItem}
        />
        <BottomNavigationAction
          onClick={handleClick}
          label="Settings"
          icon={<SettingsIcon />}
          className={classes.menuItem}
        />
      </BottomNavigation>
    </div>
  )
}

export default Footer
