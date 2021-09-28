import React, { useEffect, useState } from 'react';
import '../../styles/mobile/Appliance-Card.scss';
import axios from 'axios';
export const ApplianceCard = ({ device, hours, days }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://environment-2.eba-j6sk9zsp.us-east-1.elasticbeanstalk.com/${device}/${localStorage.USER_LOCATION}/${hours}/${days}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log('error getting appliance data', err);
      });
  }, [device, hours, days]);
  return (
    <div className='applianceContainer'>
      <div className='imageContainer'>
        <img
          src={require(`../../assets/ElectronicsFolder/${device}.png`)}
          alt={`a ${device}`}
        />
      </div>
      <div className='applianceInfo'>
        <h2 className='applianceTitle'>{device}</h2>
        <div className='outputContainer'>
          <div className='estCost'>
            <h4>Estimated Cost</h4>
            <p>${data.cost_per_year}</p>
          </div>

          <div className='energyOutput'>
            <h4>Avg.Energy Output</h4>
            <p>{data.energy_used}kwh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
