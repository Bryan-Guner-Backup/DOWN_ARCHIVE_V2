import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import SingleCityChart from '../../common/SingleCityChart';
import CloseButton from '../../common/CloseButton';
import CityDetails from '../../common/CityDetails';

const ComparisonCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 50vw;
  .comparison-card-img-section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 45vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .city-card-cityName {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-left: 2%;
      .city-card-close-btn {
        width: 2.25rem;
        height: 2rem;
      }
      .city-card-cityName-text {
        font-size: 2.25rem;
        font-family: 'Roboto', sans-serif;
        color: #fff;
        font-weight: 500;
      }
    }
  }
  .comparison-card-chart {
    width: 80%;
    margin: 0 auto;
    margin-top: 0.5%;
    height: 25%;
  }
  .comparison-card-cityDetails {
  }
`;

export default function ComparisonCard(props) {
  const { city } = props;
  return (
    <ComparisonCardContainer>
      <section
        style={{ backgroundImage: `url(${city.wikiimgurl})` }}
        className="comparison-card-img-section"
      >
        <div className="city-card-cityName">
          <div className="city-card-close-btn">
            <CloseButton cityid={city.cityid} />
          </div>
          <div className="city-card-cityName-text">{city.citynamestate}</div>
        </div>
      </section>
      <div className="comparison-card-chart">
        <SingleCityChart city={city} />
      </div>
      <div className="comparison-card-cityDetails">
        <CityDetails city={city} />
      </div>
    </ComparisonCardContainer>
  );
}
