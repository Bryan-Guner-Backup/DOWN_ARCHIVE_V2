import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../common/Form';
import UserDescription from '../../common/UserDescription';
import logo from '../../../images/microLogo.png';
import Header from '../../../styles/headers';

const AppCardStyle = styled.div`
  margin: 10px;
  padding: 10px;
  box-sizing: boarder-box;
  height: 100%;
  h1,
  h2 {
    color: #2f2d2d;
  }
  .UserDescription {
    color: #2f2d2d;
  }
`;

function AppCard() {
  return (
    <div>
      <Header></Header>
      <AppCardStyle>
        <h1>MicroFund</h1>
        <h2>Application Form</h2>
        <UserDescription />

        <Form />
      </AppCardStyle>
    </div>
  );
}

export default AppCard;
