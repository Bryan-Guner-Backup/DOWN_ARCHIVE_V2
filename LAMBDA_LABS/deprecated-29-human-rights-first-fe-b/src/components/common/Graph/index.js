import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { options, incidentCategories } from './assets';

const Graph = () => {
  // const incidentTypes = useSelector(store => store.filters.incidents);

  const [data, setData] = useState(incidentCategories);

  return (
    <div
      style={{
        backgroundColor: '#191A1A',
        margin: '0 auto',
        maxWidth: '1550px',
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
