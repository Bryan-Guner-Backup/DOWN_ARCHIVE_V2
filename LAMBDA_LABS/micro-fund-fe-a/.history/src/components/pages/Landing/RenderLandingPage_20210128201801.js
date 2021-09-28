import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from '../../common/Footer';

const Landingheader = styled.div`
  border-top: 5px solid gray;
  font-size: 30px;
  color: black;
  padding: 15px;
`;

const Landingheaderarea = styled.div`
  border: 5px solid gray;
  align-items: center;
  padding: 4em;
  color: black;
`;
const Landingareacontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
const Landingarea = styled.div`
  border: 5px solid gray;
  align-items: center;
  padding: 4em;
  color: black;
`;
const Landingareatwo = styled.div`
  border: 5px solid gray;
  align-items: center;
  padding: 4em;
  color: black;
`;

const Landingareathree = styled.div`
  border: 5px solid gray;
  align-items: center;
  padding: 4em;
  color: black;
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
        Helping microentrepreneurs around the world to start their businesses.
        <br/>
        What is MicroFund?
      </Landingarea>

        <Landingareatwo>
        Helping microentrepreneurs around the world to start their businesses.
        </Landingareatwo>
        </Landingareacontainer>
    
      <Footer />
    </div>
  );
}
export default RenderLandingPage;
