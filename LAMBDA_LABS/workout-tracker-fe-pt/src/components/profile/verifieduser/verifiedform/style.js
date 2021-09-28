import styled from "styled-components";
// ----- Page Sections -----
export const IntroSection = styled.section`
  display: flex;
  border-bottom: 2px solid #dddddd;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormSection = styled.section`
  @media (min-width: 768px) {
    margin-left: 44rem;
  }
`;
// ----- Page Containers -----

export const InformationContent = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @media (min-width: 768px) {
  }
`;

export const InnerForm = styled.div`
  @media (min-width: 768px) {
    margin-right: 1rem;
    width: 50%;
  }
`;

export const ButtonMobileContainer = styled.div`
  @media (min-width: 768px) {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 50%;
  }
`;

export const MainContainer = styled.div`
  padding: 1rem;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
  padding: 0;
  }
`;

// ----- Page Text -----

export const InfoText = styled.p`
  font-size: 18px;
  margin-bottom: 3rem;
  line-height: 22px;
  @media (min-width: 768px) {
  }
`;

export const InfoTitle = styled.h2`
  font-size: 24px;
  margin: 3rem 0 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
  }
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 3rem 0rem 3.5rem 0rem;
  @media (min-width: 768px) {
  }
`;

// ----- Page Form Inner -----
export const Input = styled.input`
  border: none;
    width: 100%;
    height: 40px;
    margin: 10px 0 35px 0;
    border-radius: 5px;
  @media (min-width: 768px) {
    }
    
  }
`;

export const Label = styled.label`
  font-weight: 500;
  @media (min-width: 768px) {
  }
`;

export const ButtonMobileIntro = styled.button`
  border: none;
  background: #277fe5;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 16px;
  width: 300px;
  height: 51px;
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// ----- Image CSS -----

export const Badge = styled.img`
  margin-left: 10px;
  @media (min-width: 768px) {
  }
`;

export const LeftArrowNavigate = styled.img`
  @media (min-width: 768px) {
    margin: 50px 0 0 50px;
  }
`;

export const InfoImage = styled.img`
  width: 100%;
  margin: 0 auto;
`;
