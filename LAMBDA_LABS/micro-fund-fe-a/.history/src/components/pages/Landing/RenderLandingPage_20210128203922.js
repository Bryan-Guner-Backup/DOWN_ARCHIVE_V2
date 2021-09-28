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
  font-size: 25px;
`;
const Landingareacontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Landingareaheaders = styled.div`
  font-size: 25px;
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
        <Landingareaheaders>
        Apply
        </Landingareaheaders>
        <br/>
        Apply to receive a grant from an organization to start your business. Pitch a business idea in your application.
      </Landingarea>
        <Landingareatwo>
        <Landingareaheaders>
        Check Status
        </Landingareaheaders>
        <br/>
        Check to see if your application has been approved if it has, then you move to the following step.
        </Landingareatwo>
        <Landingareathree>
          <Landingareaheaders>
        Approved Applications
        </Landingareaheaders>
        <br/>
        You'll receive a grant from the organization to start your business. You'll also provide regular reports to the organization and receive ongoing support, advice and resources.
        </Landingareathree>
        </Landingareacontainer>
    
      <Footer />
    </div>
  );
}
export default RenderLandingPage;
