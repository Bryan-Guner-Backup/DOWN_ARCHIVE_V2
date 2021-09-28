import React, { useEffect } from 'react';
import RenderLandingPage from '../components/RenderLandingPage';
import LandingHeader from '../components/LandingHeader';
import Footer from '../../common/Footer';
import '../../../antD/styles/landing.css';
import LayoutHFC from '../../common/layoutComponents/LayoutHFC';
import { useHistory } from 'react-router-dom';

function LandingContainer() {
  let history = useHistory();
  useEffect(() => {
    var isLoggedin = Boolean(localStorage.getItem('okta-token-storage'));
    if (isLoggedin) {
      history.push('/home');
    }
  });

  return (
    <div className="page page-layout">
      <LayoutHFC
        HeaderComponents={<LandingHeader />}
        FooterComponents={<Footer />}
        ContentComponents={<RenderLandingPage />}
      />
    </div>
  );
}

export default LandingContainer;
