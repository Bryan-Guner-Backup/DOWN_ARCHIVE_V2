import React from "react";
import ProfileNav from "../../../profilenav/ProfileNav";
import NavigationBar from "../../../../navigationbar/navigationbar";
import {
  Button,
  ContentContainer,
  LeftSideContent,
  RightSideContent,
  Title,
} from "./style";
import ComputerImage from "../../../../../assets/profilepage/weboncomputer.svg";
import { ButtonContainer } from "../../../../dashboard/createnutrition/style";
import { useHistory } from "react-router-dom";
import MobileNav from "../../../../mobilenav/MobileNav";

const Review = () => {
  const history = useHistory();

  return (
    <>
      <MobileNav/>
      <NavigationBar />
      <ProfileNav />
      <ContentContainer>
        <LeftSideContent>
          <Title> Your application is being reviewed! </Title>
          <p> We will email you with the status of your application </p>
          <ButtonContainer>
            <Button
              onClick={() => {
                history.push("/dashboard");
              }}
            >
              Return to dashboard
            </Button>
          </ButtonContainer>
        </LeftSideContent>
        <RightSideContent>
          <img src={ComputerImage} />
        </RightSideContent>
      </ContentContainer>
    </>
  );
};

export default Review;
