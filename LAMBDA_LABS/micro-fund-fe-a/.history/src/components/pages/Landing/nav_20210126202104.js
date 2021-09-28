import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: black;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;
const LogoTitle = styled.h1`
  font-size: 25px;
  color: Green;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
  justify-content: space-evenly;
  margin-right: 15px;
`;

export default function Nav() {
  return (
    <NavbarContainer>
      <LogoTitle>🐱Budbrewzzzz🐱</LogoTitle>
      <LinkContainer>
        <StyledLink to="/home">Home </StyledLink>
        <StyledLink to="/bud">Budbrew </StyledLink>
        <StyledLink to="/menu">Menu </StyledLink>
      </LinkContainer>
    </NavbarContainer>
  );
}
