import styled from "styled-components";
import { Link } from "react-router-dom";

// Upper Navigation

export const Navigation = styled.nav`
  display: flex;
  padding: 2rem;
  margin-top: 2em;
  justify-content: space-between;
  @media (min-width: 768px) {
    background: #277fe5;
    padding: 2rem;
    margin-top: 0em;
  }
`;

export const Avatar = styled.img`
  background: #277fe5;
  border-radius: 3rem;
  @media (min-width: 768px) {
    background: none;
    border-radius: none;
  }
`;

export const Logo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #1d2026;
  }
`;

export const LogoText = styled.h1`
  display: none;
  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: bold;
    color: #f6f6f6;
    margin-left: 0.5rem;
    display: block;
  }
`;

export const RightSide = styled.div`
  display: flex;
  @media (min-width: 768px) {
  }
`;

// Sub Navigation
export const SubNav = styled.nav`
  display: none;
  border-bottom: 2px solid #dddddd;
  margin-top: 8rem;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    align-items: center;
  }
  @media (min-width: 1350px) {
  display: block;
  margin-top: 8rem;
  }
`;

export const Links = styled(Link)`
  @media (min-width: 768px) {
    margin-left: 3rem;
    line-height: 50px;
    font-size: 18px;
    font-weight: 500;
    color: black;
    text-decoration: none;
    &:hover {
      color: #277fe5;
      border-bottom: 2px solid #277fe5;
      padding-bottom: 0.9rem;
    }
  }
`;

// Search Bar
export const Input = styled.input`
  display: none;
  @media (min-width: 768px) {
  }
  @media (min-width: 1350px) {
    display: block;
    width: 414px;
    border-radius: 29px;
    background: #f6f6f6;
    border: none;
    padding: 10px;
  }
`;

export const SearchIcons = styled.img`
  position: relative;
  margin-right: 1rem;
  @media (min-width: 768px) {
    right: 3rem;
    margin-right: 0rem;
  }
`;
