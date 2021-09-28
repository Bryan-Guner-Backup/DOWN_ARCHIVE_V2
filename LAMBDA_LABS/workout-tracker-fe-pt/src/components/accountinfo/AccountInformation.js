import React from "react";
import ProfileNav from "../profile/profilenav/ProfileNav";
import { ApplyTextAnchor, ButtonSection, InfoButtons } from "./style";
import RightArrow from "../../assets/profilepage/rightarrow.svg";
import NavigationBar from "../navigationbar/navigationbar";
import MobileNav from "../mobilenav/MobileNav";

const AccountInformation = () => {
  return (
    <>
      <MobileNav/>
      <NavigationBar />
      <ProfileNav />
      <ButtonSection>
        <InfoButtons title="Coming Soon">
          Personal Information
          <a href="#">
            <img src={RightArrow} alt="Right Arrow" />
          </a>
        </InfoButtons>
        <InfoButtons title="Coming Soon">
          Workouts You've Liked
          <a href="#">
            <img src={RightArrow} alt="Right Arrow" />
          </a>
        </InfoButtons>
        <InfoButtons title="Coming Soon">
          Language
          <a href="#">
            <img src={RightArrow} alt="Right Arrow" />
          </a>
        </InfoButtons>
        <ApplyTextAnchor href="/verify">
          <p> Apply to become Verified </p>
        </ApplyTextAnchor>
      </ButtonSection>
    </>
  );
};

export default AccountInformation;
