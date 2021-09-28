import React from 'react';

import LayoutHFC from '../../common/layoutComponents/LayoutHFC';
import ContentContainer from '../components/ContentContainer';
import DashboardHeader from '../components/Header';

const Dashboard = () => {
  return (
    <div>
      <LayoutHFC
        HeaderComponents={<DashboardHeader />}
        FooterComponents={<div />}
        ContentComponents={<ContentContainer />}
      />
    </div>
  );
};

export default Dashboard;
