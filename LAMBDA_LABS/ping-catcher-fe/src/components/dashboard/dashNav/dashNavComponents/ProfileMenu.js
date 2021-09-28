import React from 'react'
import { useOktaAuth } from "@okta/okta-react";
import { makeStyles, Menu, MenuItem } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(4)
  }
}))
// import the appBar theme from page component
const ProfileMenu = ({ style }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const logout = async () => authService.logout("/");
  const { authService } = useOktaAuth();

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={logout}>Log out</MenuItem>
    </Menu>
  )
  return (
    <>
           <IconButton
             edge='end'
             aria-label='account of current user'
             aria-controls={menuId}
             aria-haspopup='true'
             onClick={handleProfileMenuOpen}
             color='inherit'
             classes={{ root: classes.button }}
           >
             <AccountCircle />
           </IconButton>
      {renderMenu}
    </>
  )
}
export default ProfileMenu