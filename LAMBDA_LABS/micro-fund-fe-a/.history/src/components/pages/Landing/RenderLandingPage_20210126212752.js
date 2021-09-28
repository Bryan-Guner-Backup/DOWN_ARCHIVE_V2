import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const Title = styled.h1`
  border: 5px solid black;

`;
const LandingpageContent = styled.div`
  border: 5px solid black;

`;
export default function RenderLandingPage(props) {
  return (
       <Nav />
      <Title>MicroFund</Title>
      <LandingpageContent>
     Helping microentrepreneurs around the world to start their businesses.
          What is MicroFund?
 </LandingpageContent>
  );
}

