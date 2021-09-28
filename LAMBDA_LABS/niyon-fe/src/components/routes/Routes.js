import React from 'react'
import Marketing from '../marketing/Marketing'
import About from '../about/About'
import Home from '../home/Home'
import Profile from '../profile/Profile'
import Search from '../search/Search'
import News from '../news/News'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '../privateRoute/PrivateRoute'
import Registration from '../registration/Registration'
import Login from '../login/Login'
import ChatRoom from '../chat/ChatRoom'
import RoomSelect from '../chat/RoomSelect'

function Routes (props) {
  const token = window.localStorage.getItem('token')
  const authorized = !!token
  return (
    <Switch>
      <Route exact path="/" component={Marketing} />
      <Route path="/about" component={About} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <PrivateRoute
        path="/home"
        isAuthenticated={authorized}
        component={Home}
      />
      <PrivateRoute
        path="/profile"
        isAuthenticated={authorized}
        component={Profile}
      />
      <PrivateRoute
        path="/search"
        isAuthenticated={authorized}
        component={Search}
      />
      <PrivateRoute
        path="/news"
        isAuthenticated={authorized}
        component={News}
      />
      <PrivateRoute
        path="/roomselect"
        isAuthenticated={authorized}
        component={RoomSelect}
      />
      <PrivateRoute
        path="/chatroom/:id/:roomName/:roomId"
        isAuthenticated={authorized}
        component={ChatRoom}
      />
    </Switch>
  )
}

export default Routes
