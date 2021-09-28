import React, { useEffect, useState } from 'react';
import '../../../antD/styles/cityCard.css';

import { axiosCodes, axiosAPICall } from '../../../utils/axiosEndpoints';

import Button from '../../common/Button';

const CityCard = props => {
  const deleteFromState = () => {
    //state hooks for saved cities passed as props. They are props.saved and props.setSaved
    const newState = props.saved;
    const index = newState.findIndex(
      cityObject => cityObject.city === props.city
    );
    newState.splice(index, 1);
    props.setSaved([...newState]);
  };

  const deleteFromDB = () => {
    axiosAPICall(
      `/favorites/${props.id}`,
      axiosCodes.DELETE,
      null,
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  };

  const unsave = () => {
    deleteFromState();
    deleteFromDB();
  };

  const [cityData, setCityData] = useState({});

  useEffect(() => {
    axiosAPICall(
      '/data/city',
      axiosCodes.GET,
      {
        location: `${props.city}, ${props.state}`,
      },
      res => {
        setCityData({
          ...res.data,
        });
      },
      err => {
        console.error(err);
      }
    );
  }, []);

  return (
    <div className="city-card">
      <div className="card-header">
        <h3>City: {props.city}</h3>
        <Button handleClick={unsave} buttonText="Unsave" />
      </div>
      <div className="card-content">
        <p>Population: {cityData.population}</p>
        <p>Average Rent: {cityData.rent_per_month}</p>
        <p>Walkability: {cityData.walk_score}</p>
        <p>Liveability: {cityData.livability_score}</p>
      </div>
    </div>
  );
};

export default CityCard;
