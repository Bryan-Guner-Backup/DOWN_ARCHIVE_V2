import styled from "styled-components";

export const NavSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  padding: 10px;
`;

export const Logo = styled.h2`
  @media (min-width: 768px) {
    font-weight: 800;
    font-size: 32px;
  }
`;

export const LogoText = styled.span`
  color: #277fe5;
`;

export const SignIn = styled.button`
  background: #277fe5;
  font-family: Montserrat;
  font-weight: bold;
  height: 36px;
  border: none;
  color: white;
  border-radius: 5px;
  width: 74px;
  @media (min-width: 768px) {
    width: 107px;
    height: 44px;
    font-size: 20px;
    font-weight: 500;
  }
`;
