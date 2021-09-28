import styled from "styled-components";
import { Link } from "react-router-dom";

//Logo

export const LogoContainer = styled.section`
  text-align: center;
  margin: 2rem 0 7.5rem 0;
  @media (min-width: 768px) {
    text-align: start;
    margin: 5rem;
  }
`;
export const Logo = styled.h2`
  font-size: 36px;
  font-weight: 800;
  @media (min-width: 768px) {
    font-weight: 800;
    font-size: 48px;
  }
`;

export const LogoText = styled.span`
  color: #277fe5;
`;

// Form

export const Title = styled.p`
  font-size: 48px;
  font-weight: bold;
  margin: 9rem 0 5rem 0;
  @media (min-width: 768px) {
    margin: 1rem 0 2rem;
  }
`;

export const FormContainer = styled.section`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

export const Form = styled.form`
  z-index: 0;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
export const Input = styled.input`
  margin-bottom: 3rem;
  border: 0;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid black;
  background: none;
  &:hover {
    background: #dde8f4;
    border-radius: 3px;
    border: none;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #8b8b8b;
`;

export const SignUpImage = styled.img`
  display: none;
  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
    display: block;
  }
`;

//Background

export const Circles = styled.img`
  position: absolute;
  left: -21px;
  top: -39px;
  @media (min-width: 768px) {
    width: 805px;
    height: 805px;
  }
`;

export const Circles2 = styled.img`
  position: absolute;
  top: -1px;
  right: 0px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SignInButton = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;
export const SignInButtonText = styled.button`
  border: none;
  background: #277fe5;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 100px;
  width: 307px;
  height: 63px;
`;

export const ErrorMessages = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  color: red;
`;

export const RegisterText = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 1rem;
`;

export const Span = styled.span`
  color: #277fe5;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 0.2rem;
`;

export const SmallCircle = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 22.5rem;
    left: 53rem;
  }
`;
