import styled from 'styled-components';

export const BudgetsHolder = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  padding-top: 5%;
  @media (max-width: 765px) {
    border-bottom: 0;
    width: 100%;
    padding: 4% 8%;
    margin-bottom: 17vh;
    flex-direction: column;
  }
`;

export const BudgetsInfo = styled.div`
  margin: 0 auto;
  width: 50%;
  @media (max-width: 765px) {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;
