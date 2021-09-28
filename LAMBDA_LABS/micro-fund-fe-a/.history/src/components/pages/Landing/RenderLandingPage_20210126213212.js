import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const LandingpageContent = styled.div`
  border: 5px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  text-decoration: none;
`;

const Title = styled.h1`
  border: 5px solid black;

`;

export default function RenderLandingPage(props) {
  return (
       <Nav />
   
  );
}

