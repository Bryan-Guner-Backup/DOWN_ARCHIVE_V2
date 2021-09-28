import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../../../images/piggybank.png';

const NavbarContainer = styled.div`
  border: 5px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

const LinkContainer = styled.div` 
  width: 500px;
  display: flex;
  justify-content: space-around;
`;
const LogoTitle = styled.img`
  height: 15%;
  width: 15%;
  float: left;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  font-size: 25px;
`;

export default function Nav() {
  return (
    <NavbarContainer>
      <LogoTitle  alt="MicroFund Logo" src={logo} />
      <LinkContainer>
        <StyledLink to="/landing">Home </StyledLink>
        <StyledLink to="/landing">About </StyledLink>
        <StyledLink to="/login">Sign In/Sign Up </StyledLink>
        <StyledLink to="/login">Apply </StyledLink>
      </LinkContainer>
    </NavbarContainer>
  );
}
