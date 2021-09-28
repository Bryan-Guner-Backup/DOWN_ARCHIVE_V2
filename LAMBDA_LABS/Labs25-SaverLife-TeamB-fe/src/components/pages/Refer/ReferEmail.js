import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { HomeWrapper, HeaderContainer } from '../Home/styles/HomeStyles';
import axios from 'axios';
import { Button } from '../Nav/styles/NavStyles';

const initialState = {
  to: '', //person receiving email
};

const ReferEmail = props => {
  const [addedEmail, setAddedEmail] = useState(initialState);
  const handleChange = e => {
    setAddedEmail({
      ...addedEmail,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URI}refer`, addedEmail)
      .then(res => {
        setAddedEmail(res.body.to);
      })
      .catch(err => console.log(err, 'Email data failed to return'));
    props.history.push('/refer');
  };
  const { authService } = props;
  return (
    <HomeWrapper>
      <Nav authService={authService} />
      <HeaderContainer>
        <h1
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#c01089',
          }}
        >
          Refer a Friend!
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            textAlign: 'center',
            marginRight: '8%',
            fontSize: '1.3rem',
            fontWeight: '500',
          }}
        >
          <label
            htmlFor="to"
            style={{
              color: '#c01089',
              textAlign: 'center',
              marginRight: '2%',
              fontSize: '1.8rem',
            }}
          >
            Email:
          </label>
          <input
            type="text"
            id="to"
            name="to"
            value={addedEmail.to}
            onChange={handleChange}
            required
            style={{
              border: '2px solid #c01089',
              borderRadius: '0.5rem',
              color: '#c01089',
              textAlign: 'center',
              marginRight: '8%',
              fontSize: '1.3rem',
              fontWeight: '500',
            }}
          />
          <Button type="submit" style={{ marginLeft: '-5%' }}>
            Submit
          </Button>
        </form>
        <img
          src="https://images.unsplash.com/photo-1586034679970-cb7b5fc4928a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          className="piggy"
          width="80%"
          height="80%"
        />
      </HeaderContainer>
    </HomeWrapper>
  );
};

export default ReferEmail;
