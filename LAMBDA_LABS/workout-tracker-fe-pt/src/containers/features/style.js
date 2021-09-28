import styled from "styled-components";

export const FeatureTextContainer = styled.div`
  @media (min-width: 768px) {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 50%;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const ImageContainer2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const MainImage = styled.img`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 428px;
    height: 428px;
  }
`;

export const SubText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-family: Montserrat;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TextDesktop = styled.h2`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    font-family: Montserrat;
    font-weight: 800;
    font-size: 32px;
    margin-bottom: 1.5rem;
  }
`;

export const TextSubDesktop = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-weight: 500;
    font-size: 20px;
    font-family: Montserrat;
  }
`;

export const CtaSection = styled.section`
  text-align: center;
  margin-top: 7rem;
`;

export const ExitText = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  text-align: center;
  @media (min-width: 768px) {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const ButtonMobileContainer = styled.div`
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
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  @media (min-width: 768px) {
    width: 303px;
    height: 63px;
  }
`;

export const ButtonDesktopContainer = styled.div`
  display: flex;
  justify-content: center;
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 1rem;
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
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;
