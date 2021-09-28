import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const LandingpageContent = styled.div`
  border: 5px solid black;

`;
const Title = styled.h1`
  border: 5px solid black;

`;

export default function RenderLandingPage(props) {
  return (
       <Nav />
       <LandingpageContent>
      <Title>MicroFund</Title>
     <p>What is MicroFund?</p>
     </LandingpageContent>
  );
}

