import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Landingheader = styled.div`
  font-size: 30px;
`;
const Landingarea = styled.div`
  border: 5px solid black;
  align-items: center;
`;

function RenderLandingPage(props) {
  return (
    <div>
      <Nav />
      <Landingheader>MicroFund</Landingheader>
      <Landingarea>
        Helping microentrepreneurs around the world to start their businesses.
      </Landingarea>
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
