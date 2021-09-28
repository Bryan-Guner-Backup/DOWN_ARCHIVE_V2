import styled from "styled-components";

//Main Styles
export const MainContent = styled.div``;

// Header styles
export const Header = styled.div`
  margin-bottom: 3rem;
  margin-left: 321px;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

// Card styles

export const CardContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    padding: 2rem;
  }
`;

export const CardBody = styled.div`
  background: white;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  margin-top: 5%;
  @media (min-width: 768px) {
    margin-right: 10px;
    align-self: normal;
    margin-top: 0%;
    margin-bottom: 2%;
  }
`;
export const MediaContent = styled.img`
  height: 200px;
  width: 100%;
`;

export const CardDescription = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const CardCategory = styled.p`
  color: black;
  background: white;
  padding: 0.5rem;
  position: relative;
  top: 4rem;
  left: 12.75rem;
  width: 80px;
  text-align: center;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  margin: 1rem 0rem 1rem 10px;
`;

export const WorkoutLength = styled.p`
  font-size: 20px;
  background: #277fe5;
  border-radius: 5px;
  width: 75px;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin-left: 30px;
  color: white;
`;

//MobileNav
export const NavCircle = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
