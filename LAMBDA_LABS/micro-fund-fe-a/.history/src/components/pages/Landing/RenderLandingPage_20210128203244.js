import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from '../../common/Footer';

const Landingheader = styled.div`
  border-top: 5px solid gray;
  font-size: 45px;
  color: black;
  padding: 15px;
`;

const Landingheaderarea = styled.div`
  padding: 1em;
  color: black;
  font-size: 30px;
`;
const Landingareacontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
`;
const Landingarea = styled.div`
  border: 5px solid gray;
  align-items: center;
  padding: 4em;
  color: black;
  border-radius: 5px;
`;
const Landingareatwo = styled.div`
  border: 5px solid gray;
  align-items: center;
  padding: 4em;
  color: black;
  border-radius: 5px;
`;

const Landingareathree = styled.div`
  border: 5px solid gray;
  align-items: center;
  padding: 4em;
  color: black;
  border-radius: 5px;
  `;

function RenderLandingPage(props) {
  return (
    <div>
      <Nav />
      <Landingheader>MicroFund</Landingheader>
      <Landingheaderarea>
      Helping microentrepreneurs around the world to start their businesses.
      </Landingheaderarea>
      <Landingareacontainer>
      <Landingarea>
        What is MicroFund?
      </Landingarea>
        <Landingareatwo>
        Helping microentrepreneurs around the world to start their businesses.
        </Landingareatwo>
        <Landingareathree>
        Who should apply?
        </Landingareathree>
        </Landingareacontainer>
    
      <Footer />
    </div>
  );
}
export default RenderLandingPage;
