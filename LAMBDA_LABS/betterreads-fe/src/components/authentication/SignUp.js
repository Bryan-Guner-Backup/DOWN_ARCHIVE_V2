//Import React
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
//Import Actions
import { signUp, resetError } from '../../store/actions/authenticationActions';
//Styling
import SignUpContainer from './styles/SignUpStyle';
import facebooklogo from '../../img/facebook-logo.svg';
import googlelogo from '../../img/google-logo.svg';
//Utils
import { PageView, Event } from '../../utils/tracking';
import history from '../../utils/history';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.readrr.app';

const SignUp = (props) => {
  useEffect(() => {
    Event('Sign Up', 'Sign up loaded', 'SIGN_UP');
    PageView();
  }, []);

  const [input, setInput] = useState({
    fullName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.resetError();
    props.signUp(input, history);
    Event('SIGN UP', 'User created an account', 'SIGN_UP');
  };

  return (
    <SignUpContainer>
      <div className='banner'></div>

      <div className='form-container'>
        <form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
          <h1 data-testid='sign-up-heading'>
            Create an account to
            <br />
            join Readrr
          </h1>

          <p className='already'>
            Already have an account?
            <b
              onClick={() => {
                props.resetError();
                history.push('/signin');
              }}
              data-testid='sign-in-redirect'
            >
              Sign in here.
            </b>
          </p>

          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            placeholder='Enter your name'
            name='fullName'
            value={input.fullName}
            onChange={onChange}
            required
            data-testid='name-input'
          />

          <label htmlFor='emailAddress'>Email Address</label>
          <input
            type='email'
            placeholder='Enter your email'
            name='emailAddress'
            value={input.emailAddress}
            onChange={onChange}
            required
            data-testid='email-input'
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Enter a password'
            name='password'
            value={input.password}
            onChange={onChange}
            required
            minLength='5'
            data-testid='password-input'
          />

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            placeholder='Reenter your password'
            name='confirmPassword'
            value={input.confirmPassword}
            onChange={onChange}
            required
            minLength='5'
            data-testid='confirm-input'
          />

          {props.error && <p className='error' data-testid='error-message'>{props.error}</p>}

          <button type='submit' className='sign-up' data-testid='signup-button'>
            Sign up
          </button>

          <p className='or'>OR</p>

          <a href={`${API_URL}/api/auth/facebook`}>
            <button type='button' className='facebook-button'>
              <img src={facebooklogo} alt='facebook logo' />
              Sign up with Facebook
            </button>
          </a>

          <a href={`${API_URL}/api/auth/google`}>
            <button type='button' className='google-button'>
              <img src={googlelogo} alt='google logo' />
              Sign up with Google
            </button>
          </a>

          <p className='policy'>
            By signing up, I agree to Readrr's Terms of Service and Privacy
            Policy.
          </p>
        </form>
      </div>
    </SignUpContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.authentication.error,
  };
};

export default connect(mapStateToProps, { signUp, resetError })(SignUp);
