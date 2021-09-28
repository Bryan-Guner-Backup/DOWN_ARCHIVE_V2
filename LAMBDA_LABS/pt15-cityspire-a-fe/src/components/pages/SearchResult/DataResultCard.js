import React from 'react';

const DataResultCard = props => {
  return (
    <div>
      <p>Crime Rate: {props.citydata.crime_rate} </p>
      <p>Population: {props.citydata.population} </p>
      <p>Rental Rate:{props.citydata.rental_rate} </p>
      <p>Walk Score: {props.citydata.walk_score} </p>
    </div>
  );
};

export default DataResultCard;
