import React, { useState, useEffect } from 'react';
import { Paper, Button, Input } from '@material-ui/core';
import axios from 'axios';

const GrantForm = props => {
  //Get Grants ID from URL
  let grantID = props.match.params.id;

  const [form, setForm] = useState({
    grant_title: '',
    grant_description: '',
    grant_amount: '',
    grant_type: ''
  });

  //Create axios call to get the current data from specific grant
  useEffect(() => {
    const fetchAll = async () => {
      //Fetch Categories
      const postData = await axios(
        `${process.env.REACT_APP_API}/api/grants/${grantID}`
      );
      let currentForm = postData.data[0];
      console.log(currentForm);
      setForm(currentForm);
    };
    fetchAll();
  }, []);

  //Handle change while typing
  const handleChange = name => event => {
    setForm({ ...form, [name]: event.target.value });
  };

  //Handle submition of form
  onsubmit = e => {
    e.preventDefault();
    console.log(form, grantID);
    axios
      .put(`${process.env.REACT_APP_API}/api/grants/${grantID}`, form)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log('Error', err);
      });
  };

  return (
    <Paper className="container">
      <div className="welcome-box">
        <form className="form-welcome">
          <Input
            placeholder="Title"
            type="text"
            value={form.grant_title}
            onChange={handleChange('grant_title')}
            className="input-field"
          />
          <Input
            placeholder="Description"
            type="text"
            value={form.grant_description}
            onChange={handleChange('grant_description')}
            className="input-field"
          />
          <Input
            placeholder="Amount"
            type="number"
            value={form.grant_amount}
            onChange={handleChange('grant_amount')}
            className="input-field"
          />
          <Input
            placeholder="Grant Type"
            type="text"
            value={form.grant_type}
            onChange={handleChange('grant_type')}
            className="input-field"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onsubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default GrantForm;
