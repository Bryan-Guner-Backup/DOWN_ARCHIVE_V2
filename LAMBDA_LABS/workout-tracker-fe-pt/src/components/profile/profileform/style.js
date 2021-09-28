import styled from "styled-components";

// All profileform styles

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const FormHeader = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  @media (min-width: 768px) {
  }
`;

export const InnerForm = styled.div`
  @media (min-width: 768px) {
    margin-right: 1rem;
    width: 50%;
  }
`;

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 3rem 0rem 3.5rem 0rem;
  text-align: center;
  :nth-child(3) {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    text-align: start;
    :nth-child(3) {
      margin-bottom: 3.5rem;
    }
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  :nth-child(5) {
    margin-bottom: 10rem;
  }
  @media (min-width: 768px) {
  }
`;

export const Label = styled.label`
  @media (min-width: 768px) {
    font-weight: 500;
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
  width: 121px;
  height: 51px;
  margin-right: 1rem;
  :nth-child(1) {
    background: white;
    border: 2px solid #277fe5;
    color: #277fe5;
  }
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ButtonMobileContainer = styled.div`
  margin: 1rem 0rem 3rem 0rem;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
  }
`;
