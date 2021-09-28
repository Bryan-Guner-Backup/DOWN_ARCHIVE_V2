import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApplianceCard } from './Appliance-Card';
import '../../styles/mobile/Appliance-List.scss';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';
import axios from 'axios';
export const ApplianceList = () => {
  const [appliances, setAppliances] = useState([]);
  let [total, setTotal] = useState(0);
  let [totalUsage, setTotalUsage] = useState(0);
  useEffect(() => {
    axiosWithAuth()
      .get('https://encon-be.herokuapp.com/api/encon/appliances')
      .then((response) => {
        setAppliances(response.data);
      })
      .catch((err) => {
        console.log('error getting appliance list', err);
      });
  }, []);
  useEffect(() => {
    appliances.map((appliance) => {
      console.log(appliance);
      axios
        .get(
          `https://environment-2.eba-j6sk9zsp.us-east-1.elasticbeanstalk.com/${appliance.device}/${localStorage.USER_LOCATION}/${appliance.hours}/${appliance.days}`
        )
        .then((res) => {
          setTotal((total += res.data.cost_per_year).toFixed(2));
          setTotalUsage((totalUsage += res.data.energy_used).toFixed(2));
        })
        .catch((err) => {
          console.log('error getting appliance data', err);
        });
    });
  }, [appliances]);

  return (
    <div>
      <div className='applianceList'>
        <div className='timeContainer'>
          <a href='' className='daily'>
            Daily
          </a>
          <a href='' className='weekly'>
            Weekly
          </a>
          <a href=''>Monthly</a>
        </div>
        {appliances.map((appliance) => {
          return (
            <ApplianceCard
              key={appliance.device}
              device={appliance.device}
              hours={appliance.hours}
              days={appliance.days}
            />
          );
        })}
        <div className='totalOutput'>
          <h2>Total:</h2>
          <div className='totalCost'>${total}</div>
          <div className='totalEnergy'>{totalUsage}kWh</div>
        </div>
        {/* <Route path="/profile/userInput" component={UserInput} /> */}
        <Link to='/userInput'>
          <button className='inputEnergy'>Input Daily Energy</button>
        </Link>
      </div>
    </div>
  );
};
