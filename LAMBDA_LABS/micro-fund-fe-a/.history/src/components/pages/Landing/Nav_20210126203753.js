import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-decoration: none;
`;

const LinkContainer = styled.div` 
  width: 500px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;
const LogoTitle = styled.h1`
  font-size: 25px;
  color: black;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin-right: 15px;
`;

export default function Nav() {
  return (
    <NavbarContainer>
      <LogoTitle>MicroFund</LogoTitle>
      <LinkContainer>
        <StyledLink to="/login">Apply </StyledLink>
        <StyledLink to="/landing">Home </StyledLink>
        <StyledLink to="/login">Sign In/Sign Up </StyledLink>
        
      </LinkContainer>
    </NavbarContainer>
  );
}
