import styled from "styled-components";

export const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 5rem auto;
  @media (min-width: 768px) {
    margin-top: 5rem;
    margin-left: 20rem;
  }
`;

export const InfoButtons = styled.button`
    display: flex;
    align-items: center;
    width: 21rem;
    height: 2.2rem;
    font-size: 16px;
    border: none;
    padding: 0.5%;
    margin-top: 1%;
    justify-content: space-between;
    border-radius: 5px;
    &:hover {
      background: #d5d5d5;
    }
  @media (min-width: 768px) {

  }
`;

export const ApplyTextAnchor = styled.a`
    color: #277fe5;
    margin-top: 45px;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  @media (min-width: 768px) {

  }
`;
