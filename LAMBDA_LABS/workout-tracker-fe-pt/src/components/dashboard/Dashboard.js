import React from "react";
import { useHistory } from "react-router-dom";
import NavigationBar from "../navigationbar/navigationbar";
import MobileNav from "../mobilenav/MobileNav";
import {
  NavCircle,
  DashboardAlignment,
  LogoContainer,
  Logo,
  LogoText
} from "./style";
import WelcomeDashboard from "./WelcomeDashboard";

const Dashboard = () => {
  const history = useHistory();

  return (
    <div>
      <NavCircle className="container">
      <MobileNav />
      </NavCircle>
       <div>
        <NavigationBar />
        <WelcomeDashboard />
      </div>

      <DashboardAlignment>
        <LogoContainer>
          <Logo>
            Fit<LogoText>Tracker</LogoText>
          </Logo>
        </LogoContainer>
      </DashboardAlignment>
      </div>
  );
}; 

export default Dashboard;
