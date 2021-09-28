import styled from "styled-components";

// Profile Info Section

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1350px) {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const FormContainer = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: block;
    width: 90%;
    margin: 0 auto;
    margin-top: 1.5rem;
  }
    @media (min-width: 1350px) {
    display: block;
    width: 50%;
    margin: 0 auto;
    margin-top: 1.5rem;
  }
`;

export const UsernameContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const StatContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
  @media (min-width: 768px) {

  }
`;

export const ProfileAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1350px) {
    border-right: 2px solid #dddddd;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 1rem;
  }
`;

export const AsideTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;
`;

export const ChangePhotoButton = styled.button`
  width: 316px;
  height: 56px;
  left: 49px;
  top: 668px;
  background: #277fe5;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
  font-family: Montserrat;
  margin: 5rem 0 1rem 0;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 1rem 0.5rem 0.7rem 0;
  @media (min-width: 768px) {
  }
`;

export const Bio = styled.p`
  font-size: 14px;
`;

export const Links = styled.a`
  color: #277fe5;
  text-decoration: none;
  font-weight: 600;
`;
