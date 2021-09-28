import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import styled from 'styled-components';
import Nav from '../Landing/Nav';
import logo from '../../../images/piggybank.png';
import signupFormSchema from './signupFormSchema';

const SignupHeader = styled.div`
  border-top: 5px solid gray;
  font-size: 45px;
  color: ${props => props.theme.primaryColor};
  padding: 15px;
`;

const SignupAreaContainer = styled.div`
  border: 3px solid gray;
  color: solid gray;
  padding: 1em;
  font-size: 25px;
  margin: 0.5em 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  .error {
    color: red;
    font-size: 15px;
    text-align: center;
  }
`;

const SignupHeaders = styled.div`
  font-size: 25px;
  color: solid gray;
  text-align: right;
  margin-right: 4.5em;
`;

const Logo = styled.img`
  width: 20%;
  margin: -1em;
`;

const JoinButton = styled.div`
  button {
    background-color: ${props => props.theme.primaryColor};
    color: white;
    font-size: 25px;
    padding: 0em 1em 0em 1em;
    margin: 1em;
    height: 2em;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
`;

const LoginButton = styled.div`
  button {
    font-size: 25px;
    padding: 0em 1em 0em 1em;
    border: 3px solid ${props => props.theme.primaryColor};
    height: 2em;
    color: ${props => props.theme.primaryColor};
  }
  .link {
    color: ${props => props.theme.primaryColor};
  }
  .link:hover {
    color: black;
  }
`;

const SignupInput = styled.input`
  border: 2px solid gray;
  margin: 0.5em;
`;

function RenderSignupPage(props) {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const initialErrors = {
    username: '',
    email: '',
    password: '',
  };

  const initialDisabled = true;
  const initialUsers = [];

  const [values, setValues] = useState(initialValues);
  const { push } = useHistory();

  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState(initialUsers);
  const [errors, setErrors] = useState(initialErrors);

  const postNewUser = () => {
    axios
      .post(`insert login endpoint here`, newUser)
      .then(res => {
        console.log('postNewUser -> res.data', res);
        localStorage.setItem('token', res.data.token);
        push(`/login`);

        setUsers([...users, newUser]);
        setValues(initialValues);
        console.log(newUser);
      })
      .catch(err => console.log(err));
    console.log('postNewUser -> newUser', newUser);
  };

  const inputChange = evt => {
    const { name, value } = evt.target;

    yup
      .reach(signupFormSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...errors,
          [name]: '',
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
    setValues({
      ...values,
      [name]: value,
    });
  };

  const newUser = {
    username: values.username,
    email: values.email,
    password: values.password,
    id: Date.now(),
  };

  const submit = evt => {
    evt.preventDefault();
    postNewUser(newUser);
  };

  useEffect(() => {
    signupFormSchema.isValid(values).then(valid => {
      setDisabled(!valid);
    });
  }, [values]);

  return (
    <div>
      <Nav />
      <SignupHeader>Sign Up</SignupHeader>
      <SignupAreaContainer>
        <Logo alt="Microfund Logo" src={logo} />
        <form>
          <SignupHeaders>
            Username:
            <SignupInput
              value={values.username}
              onChange={inputChange}
              name="username"
              type="text"
            />
          </SignupHeaders>
          <div className="error">{errors.username}</div>
          <SignupHeaders>
            Email:
            <SignupInput
              value={values.email}
              onChange={inputChange}
              name="email"
              type="email"
            />
          </SignupHeaders>
          <div className="error">{errors.email}</div>
          <SignupHeaders>
            Password:
            <SignupInput
              value={values.password}
              onChange={inputChange}
              name="password"
              type="password"
            />
          </SignupHeaders>
          <div className="error">{errors.password}</div>
          <JoinButton>
            <Button onClick={submit} disabled={disabled}>
              Join Microfund
            </Button>
          </JoinButton>
        </form>
        <p>already a member of Microfund?</p>
        <LoginButton>
          <Button>
            {' '}
            <Link className="link" to="/login">
              Login Here
            </Link>
          </Button>{' '}
        </LoginButton>
      </SignupAreaContainer>
    </div>
  );
}
export default RenderSignupPage;
