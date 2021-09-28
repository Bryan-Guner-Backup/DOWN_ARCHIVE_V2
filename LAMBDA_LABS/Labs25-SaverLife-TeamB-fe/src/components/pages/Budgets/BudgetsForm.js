import React, { useState, useEffect } from 'react';
import { postFutureBudget } from '../../../api';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from '../Nav/styles/NavStyles';
import Nav from '../Nav/Nav';

const initialState = {
  monthly_savings_goal: '',
};
function BudgetsForm(props) {
  const [addedBudget, setAddedBudget] = useState(initialState);
  console.log(addedBudget.monthly_savings_goal);
  const handleChange = e => {
    setAddedBudget({
      ...addedBudget,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    postFutureBudget(
      props.url,
      props.authState,
      props.userInfo,
      addedBudget.monthly_savings_goal
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err, 'Failed to submit monthly savings goal'));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: 'center',
          marginRight: '8%',
          fontSize: '1.3rem',
          fontWeight: '500',
          marginBottom: '5%',
        }}
      >
        <label
          style={{
            color: '#c01089',
            textAlign: 'center',
            marginTop: '20%',
            marginRight: '2%',
            fontSize: '1.8rem',
          }}
        >
          Monthly Savings Goal
        </label>
        <input
          type="text"
          id="savings goal"
          name="monthly_savings_goal"
          value={addedBudget.monthly_savings_goal}
          onChange={handleChange}
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
export default BudgetsForm;
