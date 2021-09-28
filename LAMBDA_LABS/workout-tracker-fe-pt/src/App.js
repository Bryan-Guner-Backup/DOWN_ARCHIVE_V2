import { Route, Switch } from "react-router-dom";
import React from "react";

//components
import Register from "./components/register/register";
import Login from "./components/login/login";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { WorkoutForm } from "./components/dashboard/createworkout/CreateWorkoutForm";
import Calendar from "./components/calendar/Calendar";
import Profile from "./components/profile/Profile";
import LandingPage from "./components/landingpage/LandingPage";
import ViewableWorkouts from "./components/dashboard/workouts/ViewableWorkouts";
import { NutritionForm } from "./components/dashboard/createnutrition/NutritionForm";
import Diets from "./components/dashboard/diets/diets";
import Feed from "./components/feed/feed";
import HeadFeed from "./components/feed/feedcomponents/HeadFeed";
import Routine from "./components/dashboard/createroutine/Routine";
import AccountInformation from "./components/accountinfo/AccountInformation";
import VerifyForm from "./components/profile/verifieduser/verifiedform/VerifyForm";
import Review from "./components/profile/verifieduser/verifiedform/confirmation/Review";
import ViewRoutine from './components/dashboard/routines/ViewRoutines';

function App() {
  return (
    <div className="App">
      <div className="childRoutes">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/feed">
            <Feed />
          </Route>

          <Route exact path="/feed/:id" component={HeadFeed} />

          
          <ProtectedRoute exact path="/createroutine" component={Routine}>
          </ProtectedRoute>
          
          <ProtectedRoute exact path="/routines" component={ViewRoutine}>
          </ProtectedRoute>

          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>

          <ProtectedRoute path="/workouts">
            <ViewableWorkouts />
          </ProtectedRoute>

          <ProtectedRoute path="/createworkout">
            <WorkoutForm />
          </ProtectedRoute>

          <ProtectedRoute path="/diets">
            <Diets />
          </ProtectedRoute>

          <ProtectedRoute path="/createnutrition">
            <NutritionForm />
          </ProtectedRoute>

          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute path="/accountinformation">
            <AccountInformation />
          </ProtectedRoute>

          <ProtectedRoute path="/verify">
            <VerifyForm />
          </ProtectedRoute>

          <ProtectedRoute path="/confirmation">
            <Review />
          </ProtectedRoute>

          <ProtectedRoute path="/calendar">
            <Calendar />
          </ProtectedRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
