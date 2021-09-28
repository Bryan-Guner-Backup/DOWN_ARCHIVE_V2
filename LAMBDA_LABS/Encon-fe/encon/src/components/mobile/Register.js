import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import '../../styles/mobile/Register.scss';
import { HeaderAlt } from './Header-Alt.js';
import { useHistory } from 'react-router-dom';
import { ErrorMessage } from './Error-Message.js';

export const Register = () => {
  const {
    errors,
    formState,
    getValues,
    handleSubmit,
    register,
    reset,
    triggerValidation,
  } = useForm();
  // const [RegisterError, setRegisterError] = useState();
  const baseUrl = 'https://encon-be.herokuapp.com/api';
  const history = useHistory();

  const onRegisterSubmit = (data) => {
    axios
      .post(baseUrl + '/auth/register', {
        name: data.name,
        email: data.email,
        state: data.state,
        password: data.password,
        // repeatPassword: data.repeatPassword,
      })
      .then(() => {
        axios
          .post(baseUrl + '/auth/login', {
            email: data.email,
            password: data.password,
          })
          .then((res) => {
            reset();
            localStorage.setItem('AUTH_TOKEN', res.data.token);
            localStorage.setItem('USER_ID', res.data.Data.id);
            localStorage.setItem('USER_NAME', res.data.Data.name);
            localStorage.setItem('USER_LOCATION', res.data.Data.state);
            history.push('/profile');
          });
      })
      .catch((err) => {
        // setRegisterError("Registration Error: " + err.response.data.error.message);
      });
  };

  const verifyPassword = (repeatPassword) =>
    repeatPassword === getValues().password || 'Passwords do not match';
  const validatePassword = () => {
    if (formState.isSubmitted) {
      triggerValidation({ name: 'repeatPassword' });
    }
  };

  return (
    <div className='register-container'>
      <HeaderAlt />
      <form className='registerForm' onSubmit={handleSubmit(onRegisterSubmit)}>
        <label htmlFor='name' className='label'>
          Name
        </label>
        <input
          className='input'
          type='text'
          name='name'
          ref={register({ required: true, minLength: 1, maxLength: 100 })}
        />
        <ErrorMessage error={errors.name} />
        <label htmlFor='email' className='label'>
          Email
        </label>
        <input
          type='email'
          name='email'
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <ErrorMessage error={errors.email} />
        <label htmlFor='state' className='label'>
          State
        </label>
        <select
          className='select-state'
          name='state'
          ref={register({ required: true })}
        >
          <option disabled selected value=''>
            Select
          </option>
          <option value='Alabama'>Alabama</option>
          <option value='Alaska'>Alaska</option>
          <option value='Arizona'>Arizona</option>
          <option value='Arkansas'>Arkansas</option>
          <option value='California'>California</option>
          <option value='Colorado'>Colorado</option>
          <option value='Connecticut'>Connecticut</option>
          <option value='Delaware'>Delaware</option>
          <option value='District Of Columbia'>District Of Columbia</option>
          <option value='Florida'>Florida</option>
          <option value='Georgia'>Georgia</option>
          <option value='Hawaii'>Hawaii</option>
          <option value='Idaho'>Idaho</option>
          <option value='Illinois'>Illinois</option>
          <option value='Indiana'>Indiana</option>
          <option value='Iowa'>Iowa</option>
          <option value='Kansas'>Kansas</option>
          <option value='Kentucky'>Kentucky</option>
          <option value='Louisiana'>Louisiana</option>
          <option value='Maine'>Maine</option>
          <option value='Maryland'>Maryland</option>
          <option value='Massachusetts'>Massachusetts</option>
          <option value='Michigan'>Michigan</option>
          <option value='Minnesota'>Minnesota</option>
          <option value='Mississippi'>Mississippi</option>
          <option value='Missouri'>Missouri</option>
          <option value='Montana'>Montana</option>
          <option value='Nebraska'>Nebraska</option>
          <option value='Nevada'>Nevada</option>
          <option value='New Hampshire'>New Hampshire</option>
          <option value='New Jersey'>New Jersey</option>
          <option value='New Mexico'>New Mexico</option>
          <option value='New York'>New York</option>
          <option value='North Carolina'>North Carolina</option>
          <option value='North Dakota'>North Dakota</option>
          <option value='Ohio'>Ohio</option>
          <option value='Oklahoma'>Oklahoma</option>
          <option value='Oregon'>Oregon</option>
          <option value='Pennsylvania'>Pennsylvania</option>
          <option value='Rhode Island'>Rhode Island</option>
          <option value='South Carolina'>South Carolina</option>
          <option value='South Dakota'>South Dakota</option>
          <option value='Tennessee'>Tennessee</option>
          <option value='Texas'>Texas</option>
          <option value='Utah'>Utah</option>
          <option value='Vermont'>Vermont</option>
          <option value='Virginia'>Virginia</option>
          <option value='Washington'>Washington</option>
          <option value='West Virginia'>West Virginia</option>
          <option value='Wisconsin'>Wisconsin</option>
          <option value='Wyoming '>Wyoming</option>
        </select>
        <ErrorMessage error={errors.state} />
        <label htmlFor='password' className='label'>
          Password
        </label>
        <input
          type='password'
          name='password'
          ref={register({ required: true })}
          onChange={validatePassword}
        />
        <ErrorMessage error={errors.password} />
        <label htmlFor='verifyPassword' className='label'>
          Verify Password
        </label>
        <input
          type='password'
          name='repeatPassword'
          ref={register({
            required: true,
            validate: verifyPassword,
          })}
        />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
        <button className='app-buttons' type='submit'>
          Register
        </button>
        {/* <div>{RegisterError}</div> */}
      </form>
    </div>
  );
};
