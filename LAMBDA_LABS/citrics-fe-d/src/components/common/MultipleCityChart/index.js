import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 400px;
  margin: 0 auto;
  .multiple-city-chart-menu {
    display: flex;
    justify-content: space-around;
    margin: 2rem auto;
    width: 40%;
    button {
      background: none;
      border: none;
      outline: none;
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      align-self: center;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        color: #d3553f;
        font-weight: 1200;
      }
      &:focus {
        text-decoration: underline;
        color: #d3553f;
      }
    }
  }
  .multiple-city-chart-div {
    width: 100%;
    height: 360px;
    margin: 0 auto;
  }
`;

export default function MultipleCityChart(props) {
  const { temp_data } = props;
  const [chartData, setChartData] = useState();
  const years = temp_data[0].populationhist.map(c => c.year).sort();
  const colorSet = [
    '#FF595E',
    '#FFCA3A',
    '#8AC926',
    '#1982C4',
    '#6A4C93',
    '#264653',
    '#2A9D8F',
    '#E9C46A',
    '#F4A261',
    '#E76F51',
  ];

  const compare = (a, b) => {
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

  let counter = 0;
  const housePriceData = temp_data.map(city => {
    city.historicalaveragehouse = city.historicalaveragehouse.sort(compare);
    return {
      label: city.citynamestate,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: colorSet[++counter],
      pointBackgroundColor: '#fff',
      pointBorderColor: '#B820FA',
      data: city.historicalaveragehouse.map(c => {
        return c.housingcost;
      }),
    };
  });

  const housePrice = {
    labels: years,
    datasets: housePriceData,
  };

  const houseTab = e => {
    e.preventDefault();
    setChartData(housePrice);
  };

  counter = 0;
  const populationData = temp_data.map(city => {
    return {
      label: city.citynamestate,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: colorSet[++counter],
      pointBackgroundColor: '#fff',
      pointBorderColor: '#B820FA',
      data: city.populationhist.map(c => c.pop).sort(),
    };
  });

  const populationTrend = {
    labels: years,
    datasets: populationData,
  };

  const populationTab = e => {
    e.preventDefault();
    setChartData(populationTrend);
  };

  counter = 0;
  const incomeData = temp_data.map(city => {
    return {
      label: city.citynamestate,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: colorSet[++counter],
      pointBackgroundColor: '#fff',
      pointBorderColor: '#B820FA',
      data: city.historicalincome.map(c => c.householdincome).sort(),
    };
  });

  const historicalIncome = {
    labels: years,
    datasets: incomeData,
  };

  const incomeTab = e => {
    e.preventDefault();
    setChartData(historicalIncome);
  };

  useEffect(() => {
    setChartData(populationTrend);
  }, []);

  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <ChartContainer>
      <div className="multiple-city-chart-menu">
        <button onClick={populationTab}>Population Trend</button>
        <button onClick={houseTab}>House Prices</button>
        <button onClick={incomeTab}>Historical Income</button>
      </div>
      <div className="multiple-city-chart-div">
        <Line
          data={chartData}
          options={{
            title: {},
            legend: {
              display: true,
              position: 'bottom',
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
      </div>
    </ChartContainer>
  );
}
