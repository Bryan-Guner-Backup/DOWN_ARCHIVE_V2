import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from '../../common/Footer';
import Applylogo from '../../../images/applicationlogo.png';

const Landingheader = styled.div`
  border-top: 5px solid gray;
  font-size: 45px;
  color: black;
  padding: 15px;
`;

const Landingheaderarea = styled.div`
  border: 3px solid gray;
  padding: 1em;
  color: black;
  font-size: 25px;
  margin: 1em;
`;

const Landingareacontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;
const Applyimage = styled.div`
  background-image: url(${Applylogo});
`;
const Landingarea = styled.div`
  border: 3px solid gray;
  align-items: center;
  padding: 3em;
  color: black;
  border-radius: 5px;
  margin: 2em;
  font-size: 15px;
`;
const Landingareatwo = styled.div`
  border: 3px solid gray;
  align-items: center;
  padding: 3em;
  color: black;
  border-radius: 5px;
  margin: 2em;
  font-size: 15px;
`;

const Landingareathree = styled.div`
  border: 3px solid gray;
  align-items: center;
  padding: 3em;
  color: black;
  border-radius: 5px;
  margin: 2em;
  font-size: 15px;
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
          <Applyimage src={Applylogo}/>
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
        Check to see if your application has been approved, once it has been approved then you move to the following step.
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
