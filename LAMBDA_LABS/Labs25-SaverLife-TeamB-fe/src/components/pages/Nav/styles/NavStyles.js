import styled from 'styled-components';

export const NavWrapper = styled.div`
  border-bottom: 8px solid rgb(189, 35, 125);
  margin-bottom: 30px;
  display: flex;
`;

export const NavContents = styled.div`
  margin: 0 auto;
  padding: 2.5rem;
  display: flex;
  width: 65%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const SLLogo = styled.img`
  width: 170px;
  @media (max-width: 765px) {
    width: 100%;
    margin-bottom: 10%;
  }
`;

export const NavButtons = styled.div`
  margin: 0 auto;
  // width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 766px) {
    margin-left: 9vw;
  }
  @media (max-width: 765px) {
    display: flex;
    overflow: hidden;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    padding: 2%;
    border-top: 2px solid rgb(189, 35, 125);
    background: #e266b5;
  }
`;

export const Button = styled.button`
  border: 1px solid rgb(189, 35, 125);
  color: rgb(189, 35, 125);
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 500;
  background-color: white;
  padding: 0rem 2.5rem;
  height: 40px;
  :hover {
    color: white;
    background-color: rgb(189, 35, 125);
    border: 1px solid rgb(189, 35, 125);
  }

  @media (min-width: 766px) {
    margin-left: 2vw;
  }

  @media (max-width: 765px) {
    padding: 0rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 560px) {
    font-size: 0.9rem;
    text-align: center;
    padding: 0.5rem 2rem;
  }

  @media (max-width: 460px) {
    font-size: 0.8rem;
    text-align: center;
    padding: 0.5rem 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 0.5rem 1.2rem;
  }
`;
