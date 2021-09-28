import React from 'react'
import { useForm } from 'react-hook-form'
import { registerUser } from '../apiStuff/axiosWithAuth'
import Header from '../header/Header'

const Registration = (props) => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => handleOnSubmit(data)

  const handleOnSubmit = (props) => {
    const userDetails = {
      email: props.email,
      user_type: props.user_type,
      password: props.password
    }
    window.localStorage.setItem('user_type', props.user_type)
    registerUser(userDetails)
      .then((res) => {
        console.log('hitting')
        window.localStorage.setItem('token', res.data.token)
        window.localStorage.setItem('id', res.data.user.id)
        window.location = '/profile'
      })
      .catch((err) => {
        console.log('not hitting error')
        console.log(err)
      })
  }

  return (
    <div className="formWrap">
      <Header />
      <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && (
          <p style={{ color: 'orange', marginTop: 10 }}>
            Email is required
          </p> /*eslint-disable */
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && (
          <p style={{ color: "orange", marginTop: 10 }}>Password is required</p>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          ref={register({
            validate: (value) => {
              return value === watch("password"); // value is from password2 and watch will return value from password1
            },
          })}
        />
        {errors.password2 && (
          <p style={{ color: "orange", marginTop: 10 }}>
            Passwords do not match
          </p>
        )}
        <select name="user_type" ref={register({ required: true })}>
          <option value="Mentor">Mentor</option>
          <option value=" Mentee">Mentee</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
