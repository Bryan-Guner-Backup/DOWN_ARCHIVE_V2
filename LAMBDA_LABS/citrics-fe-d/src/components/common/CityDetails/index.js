import React from 'react';
import styled from 'styled-components';
import {
  FaCity,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaMoneyBillWave,
  FaMedkit,
} from 'react-icons/fa';
import {
  RiBankFill,
  RiBuilding4Line,
  RiContrastDrop2Line,
  RiDropLine,
  RiGiftLine,
  RiHome4Line,
  RiMoneyDollarBoxLine,
  RiTimerLine,
  RiFahrenheitLine,
} from 'react-icons/ri';

const CityDetailsContainer = styled.aside`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  .section1,
  .section2,
  .section3 {
    display: flex;
    height: inherit;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: space-around;
    .info-div {
      padding: 0;
      .UTC {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 800;
        height: 1rem;
        padding-left: 2.4rem;
      }
      span {
        font-family: 'Roboto', sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
      }
      .count-div {
        display: flex;
        height: calc(1rem + 3.25vh);
        align-items: flex-start;
        align-self: center;
        justify-content: flex-start;
        .icon {
          color: #000;
          width: calc(0.8rem + 2.5vh);
          height: calc(1rem + 3vh);
          margin-right: 0.4rem;
          object-fit: fill;
        }
        .count {
          display: flex;
          height: calc(0.5rem + 3.5vh);
          align-items: center;
          font-family: 'Roboto', sans-serif;
          font-size: calc(0.5rem + 3vh);
          padding: 0;
          .fahrenheit {
            font-size: calc(0.08rem + 2vh);
            align-self: flex-start;
          }
          .inch {
            font-size: calc(0.08rem + 2vh);
            align-self: flex-end;
          }
        }
      }
    }
  }
`;

export default function CityDetails(props) {
  const { city } = props;
  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const cutString = (str, pos) => {
    if (pos === 'after') return str.substring(str.indexOf(str.match(/\d/)) + 2);
    else if (pos === 'before')
      return str.substring(0, str.indexOf(str.match(/\d/)) + 2);
    else return str;
  };

  return (
    <CityDetailsContainer>
      <div className="section1">
        {/* Current Population */}
        <div className="info-div">
          <span>Current Population</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              {city.population > 500000 ? (
                <FaCity size="inherit" />
              ) : (
                <span>
                  {city.population > 100000 ? (
                    <RiBuilding4Line size="inherit" />
                  ) : (
                    <RiHome4Line size="inherit" />
                  )}
                </span>
              )}
            </span>
            <h4 className="count">{formatNumber(city.population)} </h4>
          </div>
        </div>

        {/* Average Age */}
        <div className="info-div">
          <span>Average Age</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <RiGiftLine size="30px" />
            </span>
            <h4 className="count"> {Math.round(city.averageage)} </h4>
          </div>
        </div>

        {/* Average Temperature */}
        <div className="info-div">
          <span>Average Temperature</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              {city.averagetemp > 40 ? (
                <FaTemperatureHigh size="30px" />
              ) : (
                <FaTemperatureLow size="30px" />
              )}
            </span>
            <h4 className="count">
              {isNaN(city.averagetemp)
                ? 'Data Not Found'
                : city.averagetemp.toFixed(1)}{' '}
              {isNaN(city.averagetemp) ? null : (
                <span className="fahrenheit">
                  <RiFahrenheitLine />
                </span>
              )}
            </h4>
          </div>
        </div>

        {/* Average Precipitation */}
        <div className="info-div">
          <span>Average Precipitation</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              {city.averageperc > 4 ? (
                <RiContrastDrop2Line size="30px" />
              ) : (
                <RiDropLine size="30px" />
              )}
            </span>
            <h4 className="count">
              {' '}
              {isNaN(city.averageperc)
                ? 'Data Not Found'
                : city.averageperc.toFixed(1)}
              {isNaN(city.averageperc) ? null : (
                <span className="inch">in.</span>
              )}
            </h4>
          </div>
        </div>
      </div>

      <div className="section2">
        {/* Avg. Rental Price for 1 bedroom */}
        <div className="info-div">
          <span>Avg. Rental Price for 1 bedroom</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <RiMoneyDollarBoxLine size="30px" />
            </span>
            <h4 className="count"> ${formatNumber(city.rent)} </h4>
          </div>
        </div>

        {/* Average House Price */}
        <div className="info-div">
          <span>Average House Price</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <RiBankFill size="30px" />
            </span>
            <h4 className="count">
              {' '}
              ${formatNumber(Math.round(city.averagehouse))}{' '}
            </h4>
          </div>
        </div>

        {/* Average Annual Salary */}
        <div className="info-div">
          <span>Average Annual Salary</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <FaMoneyBillWave size="30px" />
            </span>
            <h4 className="count">
              {' '}
              ${formatNumber(Math.round(city.householdincome))}{' '}
            </h4>
          </div>
        </div>
      </div>

      <div className="section3">
        {/* Cost of Living Index (CLI) */}
        <div className="info-div">
          <span>Cost of Living Index (CLI)</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              {city.costoflivingindex > 100 ? (
                <FaArrowCircleUp size="30px" />
              ) : (
                <FaArrowCircleDown size="30px" />
              )}
            </span>
            <h4 className="count"> {city.costoflivingindex}% </h4>
          </div>
        </div>

        {/* Affordable Care Act (ACA) */}
        <div className="info-div">
          <span>Affordable Care Act (ACA)</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <FaMedkit size="30px" />
            </span>
            <h4 className="count"> {city.acastatus} </h4>
          </div>
        </div>

        {/* Timezone */}
        <div className="info-div">
          <span>Timezone</span> &nbsp;{' '}
          <h6 className="UTC"> {cutString(city.timezone, 'before')} </h6>
          <div className="count-div">
            <span className="icon">
              <RiTimerLine size="30px" />
            </span>

            <h4 className="count"> {cutString(city.timezone, 'after')} </h4>
          </div>
        </div>
      </div>
    </CityDetailsContainer>
  );
}
