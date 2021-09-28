import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../styles/mobile/UserInput.scss';
import computerPNG from '../../assets/ElectronicsFolder/Computer Desktop.png';
import dishPNG from '../../assets/ElectronicsFolder/Dishwasher.png';
import washingMachinePNG from '../../assets/ElectronicsFolder/Washing Machine.png';
import tvPNG from '../../assets/ElectronicsFolder/TV (55 in LED).png';
import clothesWashPNG from '../../assets/ElectronicsFolder/Clothes Dryer.png';
import calendarPNG from '../../assets/ElectronicsFolder/calendar.png';
import { DatePicker } from './DatePicker';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';
import moment from 'moment';

// import { useOktaAuth } from "@okta/okta-react";

export const UserInput = () => {
  const { handleSubmit, register, errors } = useForm();
  const userId = localStorage.getItem('USER_ID');
  const [date, setDate] = useState(new Date());

  const onSubmit = () => {
    // const url = `/encon/appliances,${washingMachine}`;

    if (dishWasher.days && dishWasher.hours) {
      axiosWithAuth()
        .post('/encon/appliances', dishWasher)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log('error', err);
        });
    } else console.log('hours and days not entered for dishwasher');

    if (washingMachine.days && washingMachine.hours) {
      axiosWithAuth()
        .post('/encon/appliances', washingMachine)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log('error', err);
        });
    } else console.log('hours and days not entered for dishwasher');

    if (dryer.days && dryer.hours) {
      axiosWithAuth()
        .post('/encon/appliances', dryer)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log('error', err);
        });
    } else console.log('hours and days not entered for dryer');

    if (pc.days && pc.hours) {
      axiosWithAuth()
        .post('/encon/appliances', pc)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log('error', err);
        });
    } else console.log('hours and days not entered for pc');

    if (tv.days && tv.hours) {
      axiosWithAuth()
        .post('/encon/appliances', tv)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log('error', err);
        });
    } else console.log('hours and days not entered for tv');
  };

  const [dishWasher, setDishWasher] = useState({
    device: 'Dishwasher',
    hours: '',
    days: '',
    user_id: userId,
  });
  const [washingMachine, setWashingMachine] = useState({
    device: 'Washing Machine',
    hours: '',
    days: '',
    user_id: userId,
  });
  const [dryer, setDryer] = useState({
    device: 'Clothes Dryer',
    hours: '',
    days: '',
    user_id: userId,
  });
  const [pc, setPC] = useState({
    device: 'Computer Desktop',
    hours: '',
    days: '',
    user_id: userId,
  });
  const [tv, setTv] = useState({
    device: `TV (55 in LED)`,
    hours: '',
    days: '',
    user_id: userId,
  });
  console.log(dishWasher);
  // const [date, setDate] = useState("");

  // const todaysDate = (calendarData) => {
  //   setDate(calendarData);
  //intended as a callback function in order to lift state from datepicker and display current date here in userInput
  // };

  const handleDishHoursChange = (event) => {
    setDishWasher({ ...dishWasher, hours: event.target.value });
  };
  const handleDishDaysChange = (event) => {
    setDishWasher({ ...dishWasher, days: event.target.value });
  };
  const handleWashingHoursChange = (event) => {
    setWashingMachine({ ...washingMachine, hours: event.target.value });
  };
  const handleWashingDaysChange = (event) => {
    setWashingMachine({ ...washingMachine, days: event.target.value });
  };

  const handleDryerHoursChange = (event) => {
    setDryer({ ...dryer, hours: event.target.value });
  };
  const handleDryerDaysChange = (event) => {
    setDryer({ ...dryer, days: event.target.value });
  };

  const handlePCHoursChange = (event) => {
    setPC({ ...pc, hours: event.target.value });
  };
  const handlePCDaysChange = (event) => {
    setPC({ ...pc, days: event.target.value });
  };

  const handleTVHoursChange = (event) => {
    setTv({ ...tv, hours: event.target.value });
  };
  const handleTVDaysChange = (event) => {
    setTv({ ...tv, days: event.target.value });
  };

  return (
    <div className='user-input'>
      <h1>Input Time Used</h1>
      <div className='datepicker-link'>
        <Link to='/userInput/DatePicker'>
          <img
            className='calPNG'
            src={calendarPNG}
            alt='black line drawing of a calendar'
          />
        </Link>
      </div>
      <h2 className='todaysDate'>{moment().format('LL')}</h2>
      <div className='calDiv'>
        <Route path='/userInput/DatePicker' component={DatePicker} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='device-container'>
          <section className='device-section'>
            <img src={dishPNG} alt='black line drawing of a dishwasher' />
            <h3 className='dishH3'>Dishwasher</h3>
            <div className='device-fields'>
              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputHrs'
                  name='dishWasherHours'
                  placeholder='hours'
                  ref={register({ min: 1, max: 24 })}
                  onChange={handleDishHoursChange}
                  value={dishWasher.hours}
                ></input>
                <label htmlFor='dishWasherHours'></label>
                {errors.dishWasherHours && 'hours 1-24'}
              </div>

              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputDays'
                  ref={register({ min: 1, max: 7 })}
                  name='dishWasherDays'
                  placeholder='days per week'
                  onChange={handleDishDaysChange}
                  value={dishWasher.days}
                ></input>
                <label htmlFor='dishWasher days'></label>
                {errors.dishWasherDays && <p>enter message</p>}
              </div>
            </div>
          </section>

          <section className='device-section'>
            <img
              src={washingMachinePNG}
              alt='black line drawing of a washer/dryer for clothes'
            />
            <h3 className='washH3'>Washing Machine</h3>
            <div className='device-fields'>
              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputHrs'
                  ref={register({ min: 1, max: 24 })}
                  name='Washing Machine hours'
                  placeholder='hours'
                  onChange={handleWashingHoursChange}
                  value={washingMachine.hours}
                ></input>
                <label htmlFor='Washing Machine hours'></label>
                {errors.entername && <p>enter message</p>}
              </div>

              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputDays'
                  ref={register({ min: 1, max: 7 })}
                  name='Washing Machine days'
                  placeholder='days per week'
                  onChange={handleWashingDaysChange}
                  value={washingMachine.days}
                ></input>
                <label htmlFor='Washing Machine days'></label>
                {errors.entername && <p>enter message</p>}
              </div>
            </div>
          </section>

          <section className='device-section'>
            <img
              src={clothesWashPNG}
              alt='black line drawing of a washer/dryer for clothes'
            />
            <h3 className='clothesH3'>Clothes Dryer</h3>
            <div className='device-fields'>
              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputHrs'
                  ref={register({ min: 1, max: 24 })}
                  name='Dryer hours'
                  placeholder='hours'
                  onChange={handleDryerHoursChange}
                  value={dryer.hours}
                ></input>
                <label htmlFor='Dryer hours'></label>
                {errors.entername && <p>enter message</p>}
              </div>

              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputDays'
                  ref={register({ min: 1, max: 7 })}
                  name='Dryer days'
                  placeholder='days per week'
                  onChange={handleDryerDaysChange}
                  value={dryer.days}
                ></input>
                <label htmlFor='Dryer days'></label>
                {errors.entername && <p>enter message</p>}
              </div>
            </div>
          </section>

          <section className='device-section'>
            <img
              src={computerPNG}
              alt='black line drawing of a desktop computer'
            />
            <h3 className='pcH3'>Desktop PC</h3>
            <div className='device-fields'>
              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputHrs'
                  ref={register({ min: 1, max: 24 })}
                  name='pc hours'
                  placeholder='hours'
                  onChange={handlePCHoursChange}
                  value={pc.hours}
                ></input>
                <label htmlFor='pc hours'></label>
                {errors.entername && <p>enter message</p>}
              </div>
              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputDays'
                  ref={register({ min: 1, max: 7 })}
                  name='pc days'
                  placeholder='days per week'
                  onChange={handlePCDaysChange}
                  value={pc.days}
                ></input>
                <label htmlFor='pc days'></label>
                {errors.entername && <p>enter message</p>}
              </div>
            </div>
          </section>

          <section className='device-section'>
            <img src={tvPNG} alt='black line drawing of a television' />
            <h3 className='tvH3'>Television</h3>
            <div className='device-fields'>
              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputHrs'
                  ref={register({ min: 1, max: 24 })}
                  name='tv hours'
                  placeholder='hours'
                  onChange={handleTVHoursChange}
                  value={tv.hours}
                ></input>
                <label htmlFor='tv hours'></label>
                {errors.entername && <p>enter message</p>}
              </div>
              <div className='device-use-duration'>
                <input
                  type='number'
                  className='inputDays'
                  ref={register({ min: 1, max: 7 })}
                  name='tv days'
                  placeholder='days per week'
                  onChange={handleTVDaysChange}
                  value={tv.days}
                ></input>
                <label htmlFor='tv days'></label>
                {errors.entername && <p>enter message</p>}
              </div>
            </div>
          </section>
        </div>
        <button className='app-buttons-input' type='submit'>
          {/* this button will submit post request */}
          Confirm
        </button>
      </form>
      <div className=''></div>
      <div className='input-button-container'>
        <Link to='/profile/appliances'>
          <button className='app-buttons-input-dashlink'>
            Go to Dashboard
          </button>
        </Link>
      </div>
      Icons made by{' '}
      <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
        Freepik
      </a>{' '}
      from{' '}
      <a href='https://www.flaticon.com/' title='Flaticon'>
        {' '}
        www.flaticon.com
      </a>
    </div>
  );
};
