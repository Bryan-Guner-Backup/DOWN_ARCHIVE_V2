import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getSpending } from '../../api';
import { SpendingContainer, SpendingInfo } from './styles/GraphStyles';

const initialState = {
  data: [],
  layout: {},
};

function SpendingPost(props) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    function fetchDSData() {
      getSpending(props.url, props.authState, props.userInfo)
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
    <SpendingContainer>
      <SpendingInfo>
        <h1>Monthly Spending</h1>
        <p>
          Here are your spendings this month. You spent this much in this
          category this month.
        </p>
      </SpendingInfo>

      <SpendingInfo>
        <Plot
          data={data.data}
          useResizeHandler
          style={{ width: '100%', height: 500 }}
          layout={
            (data.layout,
            { yaxis: { fixedrange: true }, xaxis: { fixedrange: true } })
          }
        />
      </SpendingInfo>
    </SpendingContainer>
  );
}

export default SpendingPost;
