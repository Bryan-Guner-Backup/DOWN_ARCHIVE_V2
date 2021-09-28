import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'antd';

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <Link to="/home">
        <Button type="text" className="dashboard-button">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default DashboardHeader;
