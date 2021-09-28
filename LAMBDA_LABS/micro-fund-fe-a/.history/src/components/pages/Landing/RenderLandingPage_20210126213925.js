import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';
import Footer from '../../common/Footer';
const Title = styled.h1`
  border: 5px solid black;

`;
const LandingpageContent = styled.h1`
  border: 5px solid black;

`;
function RenderLandingPage() {
  return (
    <div className ="landing-page"
      <div>
       <Nav />

      <Footer />
      </div>
      </div>
  );
}
export default RenderLandingPage;
