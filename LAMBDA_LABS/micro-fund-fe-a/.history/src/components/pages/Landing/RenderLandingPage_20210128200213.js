import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Landingheader = styled.div`
  font-size: 25px
`;

function RenderLandingPage(props) {
  return (
    <div>
      <Nav />
      <Landingheader>MicroFund</Landingheader>
      <p>
        Helping microentrepreneurs around the world to start their businesses.
      </p>
      <div>
        <p>What is MicroFund?</p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
