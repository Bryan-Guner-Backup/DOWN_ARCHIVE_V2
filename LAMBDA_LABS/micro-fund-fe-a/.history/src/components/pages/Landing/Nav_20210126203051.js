import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  border: 5px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  border: 5px solid black;  
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
  border: 5px solid black;
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
        <StyledLink to="/landing">Home </StyledLink>
        <StyledLink to="/login">Sign In </StyledLink>
        <StyledLink to="/login">Apply </StyledLink>
      </LinkContainer>
    </NavbarContainer>
  );
}
