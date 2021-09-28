import React from 'react';
import RenderLandingPage from './RenderLandingPage';
import LandingBodyPage from './landingBodyPage';

import { Layout } from 'antd';
import AppFooter from './AppFooter';
import Navbar from '../../common/Navbar';
const { Footer } = Layout;

function LandingContainer() {
  return (
    <Layout style={mainLayout}>
      <Navbar />
      <RenderLandingPage />
      <LandingBodyPage />
      <Footer style={footerStyle}>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

let mainLayout = {
  padding: '0',
  height: 'auto',
  lineHeight: '1.6',
  width: '100%',
};

let footerStyle = {
  width: '100%',
};
export default LandingContainer;
