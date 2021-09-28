import React from "react";
import {
  Avatar,
  Input,
  Links,
  Logo,
  LogoText,
  Navigation,
  RightSide,
  SearchIcons,
  SubNav,
} from "./style";
import DefaultAvatar from "../../../assets/profilepage/defaultavatar.svg";
import SearchIcon from "../../../assets/profilepage/searchicon.svg";
const ProfileNav = () => {
  return (
    <>
      <Navigation>
        <Logo>
          <LogoText>Profile</LogoText>
        </Logo>
        <RightSide>
          <Input type="text" placeholder="Type something..." />
          <SearchIcons src={SearchIcon} />

          <Avatar src={DefaultAvatar} alt="Profile Avatar" />
        </RightSide>
      </Navigation>
      <SubNav>
        <Links to="/profile"> Edit Profile </Links>
        <Links to="/accountinformation"> Account Information </Links>
        <Links> Security </Links>
        <Links> Payment Information </Links>
      </SubNav>
    </>
  );
};

export default ProfileNav;
