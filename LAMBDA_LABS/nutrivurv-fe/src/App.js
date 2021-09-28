import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import ProtectedRoute from "./components/utils/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
