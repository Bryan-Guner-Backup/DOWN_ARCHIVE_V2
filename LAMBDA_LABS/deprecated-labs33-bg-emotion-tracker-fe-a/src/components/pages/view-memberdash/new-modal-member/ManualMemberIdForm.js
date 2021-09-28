import React, { useState } from 'react';
import { FormButton } from '../../../common';
import axios from 'axios';

import './styles/ManualImport.less';

function ManualMemberIdForm(props) {
  const { newMemberId, setNewMemberId } = props;
  const [memberId, setMemberId] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setMemberId(value);
    setNewMemberId([value]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const tokens = JSON.parse(localStorage.getItem('okta-token-storage'));
    const access_token = tokens.accessToken.accessToken;

    axios
      .post(
        'https://bg-emotion-tracker-be-a.herokuapp.com/members/member',
        memberId,
        {
          headers: {
            Authorization: 'Bearer ' + access_token,
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => {
        alert('Success! Member added to the Database');
        console.log(res);
      })
      .catch(err => {
        alert('An error occurred');
        console.log(err);
      });
  };

  return (
    <div className="mainInputWindow">
      <form className="formDiv" onSubmit={e => handleSubmit(e)}>
        <div>
          <input
            required
            name="newmember"
            type="text"
            placeholder="Member ID"
            onChange={handleChange}
          />
        </div>

        <FormButton
          className="formButton"
          buttonText="Submit"
          classType="default"
          disabled="false"
        />
      </form>
    </div>
  );
}

export default ManualMemberIdForm;
