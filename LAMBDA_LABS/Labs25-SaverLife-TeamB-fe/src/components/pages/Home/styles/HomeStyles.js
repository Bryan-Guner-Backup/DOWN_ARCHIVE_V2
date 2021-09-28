import styled from 'styled-components';

export const HeaderContainer = styled.div`
  align-content: center;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  @media (max-width: 765px) {
    width: 100%;
    h1 {
      font-size: 2.5rem;
    }
    padding-bottom: 5%;
    :after {
      content: '';
      display: block;
      margin: 0 auto;
      width: 80%;
      padding-top: 20px;
    }
  }
`;
export const HomeWrapper = styled.div`
  @media (max-width: 765px) {
    text-align: center;
    width: 100%;
  }
`;
