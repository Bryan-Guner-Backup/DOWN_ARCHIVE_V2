import styled from 'styled-components';

export const MoneyFlowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  padding-top: 5%;
  @media (max-width: 765px) {
    width: 100%;
    padding: 0;
    flex-direction: column;
    margin: 0;
    border-bottom: 0;
  }
`;
export const MoneyFlowInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    margin: 0;
`;

export const RenderGraphWrapper = styled.div`
h1{
  font-size: 2rem;
};
@media (max-width: 765px) {
    padding-top: 5%;
    width: 100%;
    margin: 0 auto;
@media (max-width: 600px) {
    width: 92%;
    margin: 0 auto;
@media (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
@media (max-width: 400px) {
    width: 90%;
    margin: 0 auto;
@media (max-width: 300px) {
    width: 88%;
    margin: 0 auto;
`;

export const SpendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  padding-top: 5%;
  @media (max-width: 765px) {
    width: 100%;
    padding: 0;
    margin: 0;
    border-bottom: 0;
  }
`;
export const SpendingInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    text-align: center;
    margin: 0;
  }
`;

export const SpendingBarContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
  border-bottom: 1px solid #e266b5;
  padding-top: 5%;
  @media (max-width: 765px) {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column;
    border-bottom: 0;
  }
`;
