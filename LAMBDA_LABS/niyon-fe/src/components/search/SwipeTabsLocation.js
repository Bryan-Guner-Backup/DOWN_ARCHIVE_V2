import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import UserCard from '../connections/UserCard'
import { UserContext } from '../../UserContext'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  }
}

function SwipeTabsLocation (props) {
  const theme = useTheme()
  const [value, setValue] = useState(0)
  /*eslint-disable */
  const { user, setUser } = useContext(UserContext)

  const myConnections = props.locationsToDisplay
  const endpoint = 'request'
  // console.log('user from context in Swipe Tabs>', myConnections)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="fullWidth"
          aria-label="tabs"
        >
          <Tab className="tabStyles" label="Mentors" {...a11yProps(0)} />
          <Tab label="Mentees" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <React.Fragment>
        { myConnections && myConnections.length > 0 && <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div>
              {myConnections.length > 0 && myConnections.map(request => {
                if (request.user_type.trim().toLowerCase() === 'mentor') {
                  return <UserCard value={request} endpoint={endpoint}/>
                }
              }) }
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div>
              {myConnections.length > 0 && myConnections.map(request => {
                if (request.user_type.trim().toLowerCase() === 'mentee') {
                  return <UserCard value={request} endpoint={endpoint}/>
                }
              }) }
            </div>
          </TabPanel>
        </SwipeableViews>}
        {!myConnections && <p>No connection requests....</p>}
      </React.Fragment>
    </div>

  )
}

export default SwipeTabsLocation
