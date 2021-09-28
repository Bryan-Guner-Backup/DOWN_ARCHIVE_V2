import React from 'react';
import Nav from '../Nav/Nav';
import RenderGraphs from '../../graphs/RenderGraphs';
import { HomeWrapper, HeaderContainer } from './styles/HomeStyles';

function RenderHomePage(props) {
  const { userInfo, authService, authState } = props;

  return (
    <HomeWrapper>
      <Nav authService={authService} />
      <HeaderContainer>
        <h1>Your Documented Spending and Saving History</h1>
      </HeaderContainer>

      <RenderGraphs userInfo={userInfo} authState={authState} />
    </HomeWrapper>
  );
}
export default RenderHomePage;
