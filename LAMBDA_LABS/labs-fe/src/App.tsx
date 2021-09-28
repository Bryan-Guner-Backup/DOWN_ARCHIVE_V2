import React from "react";
import "./App.css";
import {
  Route, Switch,
} from "react-router-dom";
import { Layout } from "antd";

//* * Component Imports **/
import NavigationHeader from "./components/Navigation/Navigation";
import Attendance from "./components/Attendance/Attendance";
import TeamBuilder from "./components/TeamBuilder/TeamBuilder";
import LearnerSuccess from "./components/LearnerSuccess/LearnerSuccess";
import FourthComponent from "./components/FourthComponent/FourthComponent";
import Home from "./components/Home/Home";

const { Content } = Layout;

const App = (): JSX.Element => (
  <>
    <NavigationHeader />
    <Layout style={{ margin: "15px", background: "#fff" }}>
      <Content>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/attendance">
            <Attendance />
          </Route>
          <Route path="/teambuilder">
            <TeamBuilder />
          </Route>
          <Route path="/learnersuccess">
            <LearnerSuccess />
          </Route>
          <Route path="/fourth">
            <FourthComponent />
          </Route>
        </Switch>
      </Content>
    </Layout>
  </>
);

export default App;
