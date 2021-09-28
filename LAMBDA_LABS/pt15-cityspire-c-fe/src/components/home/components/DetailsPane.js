import React, { useState, useEffect, useContext } from 'react';

import '../../../antD/styles/detailsPane.css';
import Button from '../../common/Button';

import axios from 'axios';
import { Context } from '../../../state/contexts';

import { axiosCodes, axiosAPICall } from '../../../utils/axiosEndpoints';

const DetailsPane = ({ currentPlaceSelection }) => {
  const { userInfo, savedCities } = useContext(Context);
  const [userData, setUserData] = userInfo;
  const [saved, setSaved] = savedCities;

  const [cityData, setCityData] = useState({});

  const saveToState = () => {
    setSaved([...saved, currentPlaceSelection]);
  };

  const saveToDb = () => {
    axiosAPICall(
      `/favorites/`,
      axiosCodes.POST,
      {
        users_id: userData.id,
        ...currentPlaceSelection,
      },
      res => {
        console.log(res);
      },
      err => {
        console.log('error: ', err);
      }
    );
  };

  const save = () => {
    saveToState();
    saveToDb();
  };

  useEffect(() => {
    axiosAPICall(
      '/data/city',
      axiosCodes.GET,
      {
        location: `${currentPlaceSelection.city}, ${currentPlaceSelection.state}`,
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
    <div className="details-pane">
      <Button handleClick={save} buttonText="Save" />
      <p>Name: {cityData.city_name}</p>
      <p>Population: {cityData.population}</p>
      <p>Average Rent: {cityData.rent_per_month}</p>
      <p>Walkability: {cityData.walk_score}</p>
      <p>Liveability: {cityData.livability_score}</p>
    </div>
  );
};

export default DetailsPane;
