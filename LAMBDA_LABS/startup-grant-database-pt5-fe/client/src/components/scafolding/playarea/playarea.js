import React from "react";
import { Route } from "react-router-dom";
import Login from "../../../Authentication/Login";
import Search from "./../../search/search.js";
import ResultCard from "./../../search/resultcard.js";
import DashBoard from "../../dashboard/DashBoard";
import LandingPage from "../../LandingPage";
import Settings from "../../dashboard/Settings";
import "./playarea.css";
import InitialSignupForm from "../../onboarding/Welcome";
import Choose_Tags from "../../onboarding/Choose_Tags";
import CategoryTags from "../../onboarding/CategoryTags";
import PrivateRoute from "../../PrivateRoute";
import GrantForm from "../../grant-forms/GrantForm";
import ApplyForm from "../../search/apply/applyForm/applyForm";
import EditGrantForm from "../../grant-forms/EditGrantForm";
import ApplicationsMain from "../../dashboard/Applications-Main";
import GrantorDashBoard from "../../dashboard/GrantorDashBoard";
import GrantsMain from "../../dashboard/Grants-Main";
import GrantCats from '../../grant-forms/GrantCats';
import GrantElis from '../../grant-forms/GrantElis';
import GrantStatesForm from '../../grant-forms/GrantStatesFrom'

const PlayArea = () => {
  return (
    <div className="play-area">
      {/* ALL ROUTES */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      {/* <Route path="/search" component={Search} />
      <Route path="/apply-form" component={ApplyForm} /> */}
      <Route
        path="/search"
        render={props => (
          <div>
            <Route exact path={`${props.match.path}`} component={Search} />
            <Route
              exact
              path={`${props.match.path}/apply/:grant_id`}
              component={ApplyForm}
            />
          </div>
        )}
      />

      <PrivateRoute path="/welcome" component={InitialSignupForm} />
      <PrivateRoute path="/Choose_Tags" component={Choose_Tags} />
      <PrivateRoute path="/category-tags" component={CategoryTags} />

      {/* <Route path="/applications" component={GrantsMain} /> */}

      {/* PROTECTED ROUTES */}

      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/dashboard" component={DashBoard} />
      <PrivateRoute path="/new-grant" component={GrantForm} />
      <PrivateRoute path="/grantordashboard" component={GrantorDashBoard} />
      <PrivateRoute path="/applications" component={ApplicationsMain} />
      <PrivateRoute path="/grants" component={GrantsMain} />
      <PrivateRoute path ='/grant-elis' component={GrantElis} />
      <PrivateRoute path ='/grant-cats' component={GrantCats} />
      <PrivateRoute path ='/grant-states' component={GrantStatesForm} />

      {/* //TODO: Testing route to update grants */}
      <PrivateRoute path="/edit-grant/:id" component={EditGrantForm} />
    </div>
  );
};
export default PlayArea;
