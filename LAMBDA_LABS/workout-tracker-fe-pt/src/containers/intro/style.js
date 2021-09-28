import styled from "styled-components";

export const IntroSection = styled.section`
  font-family: Montserrat;
`;

export const Content = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
`;
export const IntroText = styled.div`
  @media (min-width: 768px) {
    margin-left: 4rem;
    margin-top: 2rem;
    font-weight: 500;
    align-content: center;
  }
`;

export const SubText = styled.p`
  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    margin-top: 2rem;
  }
`;

export const BoldText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 6rem;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const SpanText = styled.span`
  color: #277fe5;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MainImage = styled.img`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 428px;
    height: 428px;
  }
`;

export const ButtonDesktopContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 5rem;
  }
`;

export const ButtonDesktopIntro = styled.button`
  border: none;
  background: #277fe5;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 100px;
  width: 158px;
  height: 44px;
  @media (min-width: 768px) {
    font-size: 24px;
    width: 303px;
    height: 63px;
    font-weight: 600;
  }
`;

export const ButtonMobileContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ButtonMobileIntro = styled.button`
  border: none;
  background: #277fe5;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 100px;
  width: 158px;
  height: 44px;
`;
