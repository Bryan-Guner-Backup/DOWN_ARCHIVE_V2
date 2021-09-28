import React from 'react';
import { Line } from 'react-chartjs-2';

import SingleCityChartDiv from './style';

export default function SingleCityChart(props) {
  const { city } = props;

  const compare = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const yearA = a.year;
    const yearB = b.year;

    let comparison = 0;
    if (yearA > yearB) {
      comparison = 1;
    } else if (yearA < yearB) {
      comparison = -1;
    }
    return comparison;
  };

  city.historicalaveragehouse = city.historicalaveragehouse.sort(compare);

  const years = city.historicalincome.map(c => c.year).sort();
  const income = city.historicalincome.map(c => c.householdincome).sort();
  const housingCost = city.historicalaveragehouse.map(c => {
    return c.housingcost;
  });

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Income History',
        backgroundColor: '#d3553f',
        borderColor: '#d3553f',
        pointBackgroundColor: '#d3553f',
        pointBorderColor: '#d3553f',
        data: income,
      },
      {
        label: 'Housing History',
        backgroundColor: '#f2c8a6',
        borderColor: '#f2c8a6',
        pointBackgroundColor: '#f2c8a6',
        pointBorderColor: '#f2c8a6',
        data: housingCost,
      },
    ],
  };

  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <SingleCityChartDiv>
      <Line
        data={chartData}
        options={{
          title: {},
          fill: 'start',
          legend: {
            display: false,
            position: 'right',
            fontFamily: 'Roboto',
          },
          maintainAspectRatio: false,
          animation: {
            duration: '1500',
            easing: 'linear',
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(label) {
                    if (label === 0) {
                      return '0';
                    } else {
                      return '$' + formatNumber(label);
                    }
                  },
                  fontSize: 12,
                  fontFamily: 'Roboto',
                  fontColor: '#000000',
                },
                scaleLabel: {
                  display: true,
                  fontSize: 12,
                  fontFamily: 'Roboto',
                  fontColor: '#000000',
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: 12,
                  fontFamily: 'Roboto',
                  fontColor: '#000000',
                },
              },
            ],
          },
        }}
      />
    </SingleCityChartDiv>
  );
}
