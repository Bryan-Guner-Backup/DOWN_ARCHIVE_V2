import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getSpendingBar } from '../../api';
import { SpendingBarContainer, SpendingInfo } from './styles/GraphStyles';

const initialState = {
  data: [],
  layout: {},
};

function SpendingPostBar(props) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    function fetchDSData() {
      getSpendingBar(props.url, props.authState, props.userInfo)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
        });
    }
    fetchDSData();
  }, [props.url, props.authState, props.userInfo]);

  return (
    <SpendingBarContainer>
      <SpendingInfo>
        <h1>Daily Spending</h1>
        <p>Here is your daily spending by category over the last week</p>
      </SpendingInfo>

      <Plot
        data={data.data}
        useResizeHandler
        style={{ width: '100%', height: 500 }}
        layout={
          (data.layout,
          { yaxis: { fixedrange: true }, xaxis: { fixedrange: true } })
        }
      />
    </SpendingBarContainer>
  );
}

export default SpendingPostBar;
