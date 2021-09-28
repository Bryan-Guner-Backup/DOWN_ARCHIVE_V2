import React, { useContext, useEffect } from 'react';

import { Context } from '../../../state/contexts';
import '../../../antD/styles/dashboard.css';

import { axiosCodes, axiosAPICall } from '../../../utils/axiosEndpoints';

import CityCard from './CityCard';

const ContentContainer = () => {
  const { userInfo, savedCities } = useContext(Context);
  const [userData, setUserData] = userInfo;
  const [saved, setSaved] = savedCities;

  useEffect(() => {
    axiosAPICall(
      `/favorites/${userData.id}`,
      axiosCodes.GET,
      null,
      res => {
        setSaved(res.data);
        console.log(res.data);
      },
      err => {
        console.error(err);
      }
    );
  }, []);

  return (
    <div className="dashboard">
      {saved.map(cityObject => {
        return (
          <CityCard
            key={cityObject.id}
            id={cityObject.id}
            city={cityObject.city}
            state={cityObject.state}
            saved={saved}
            setSaved={setSaved}
          />
        );
      })}
    </div>
  );
};

export default ContentContainer;
