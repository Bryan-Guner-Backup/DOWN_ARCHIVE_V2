import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 76%;
    float: right;
  }
`;

export const Header = styled.div`
  font-size: 34px;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 95%;
  font-weight: 600;
  border-bottom: 4px solid;
  line-height: 3.5rem;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const RoutineTitle = styled.div`
  font-size: 18px;
  margin-bottom: 1rem;
  background: #277fe5;
  width: 100px;
  padding: 10px;
  color: white;
  border-radius: 15px;
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  margin: 0.5rem 0rem 0rem 15.7rem;
  position: absolute;
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  margin: -6.4rem 0rem 0rem 15.7rem;
  position: absolute;
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const BigDelButton = styled.button`
  background: #277fe5;
  border-radius: 1rem;
  border: none;
  color: white;
  padding: 1rem;
  margin-left: 10rem;
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const EditIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const CardBody = styled.div`
  background: white;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  margin: 5% 0% 10% 0%;
  border-left: 5px solid #277fe5;
  @media (min-width: 768px) {
    margin-right: 10px;
    align-self: normal;
    margin-top: 0%;
    margin-bottom: 2%;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: block;
    flex-direction: none;
    align-items: none;
  }
`;
