import React, { useState } from 'react';
import FormButton from '../../common/FormButton';
import axios from 'axios';

function ManualProgramIdForm() {
  const [memberId, setMemberId] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setMemberId(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const tokens = JSON.parse(localStorage.getItem('okta-token-storage'));
    const access_token = tokens.accessToken.accessToken;

    axios
      .post(
        // NEED ENDPOINT FOR SINGLE UPLOADS
        'https://bg-emotion-tracker-be-a.herokuapp.com/programs/program',
        memberId,
        {
          headers: {
            Authorization: 'Bearer ' + access_token,
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => {
        alert('Success! Program added to the Database');
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
            name="newprogram"
            type="text"
            placeholder="New Program"
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
export default ManualProgramIdForm;
