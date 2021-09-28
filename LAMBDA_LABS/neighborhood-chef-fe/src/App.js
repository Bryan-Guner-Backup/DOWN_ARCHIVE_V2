import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/utils/private-route";
import GenericRedirect from "./components/utils/generic-redirect";
import LoginRedirect from "./components/utils/login-redirect";
import Register from "./components/account/Register.js";
import Settings from "./components/other/Settings";
import Recipes from "./components/other/Recipes";
import Notifications from "./components/other/Notifications";
import Messages from "./components/other/Messages";
import ChangePassword from "./components/account/PasswordChangePage";
import CheckEmail from "./components/account/CheckEmail";
import AboutUs from "./components/other/AboutUs";
import Community from "./components/other/Community";

import Login from "./components/account/Login";
import GridStructure from "./components/gridstructure";

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/login-redirect-url" component={LoginRedirect} />
        <Route
          path="/generic-redirect/:redirect_path"
          component={GenericRedirect}
        />
        <Route exact path="/" component={Login} />
        <Route
          path="/initialChangePassword/:string"
          component={ChangePassword}
        />
        <PrivateRoute path="/dashboard" component={GridStructure} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/create-event" component={GridStructure} />
        <PrivateRoute path="/view-events" component={GridStructure} />
        <Route path="/register" component={Register} />
        <Route path="/settings" component={Settings} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/messages" component={Messages} />
        <Route path="/grid" component={GridStructure} />
        <PrivateRoute path="/events/:id" component={GridStructure} />
        <Route path="/register-check-email" component={CheckEmail} />
        <Route path="/community" component={Community} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
