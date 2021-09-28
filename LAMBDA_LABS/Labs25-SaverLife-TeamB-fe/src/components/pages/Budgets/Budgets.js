import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { BudgetsHolder, BudgetsInfo } from './styles/BudgetStyles';
import { getFutureBudget } from '../../../api';
import Nav from '../Nav/Nav';

const initialState = {
  data: {},
};

function Budgets({ url, authState, userInfo, authService }) {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    function fetchDSData() {
      getFutureBudget(url, authState, userInfo)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
          console.log(err);
        });
    }
    fetchDSData();
  }, [url, authState, userInfo]);

  const checkProgressColor = percentage => {
    if (percentage < 50) {
      return 'success';
    } else if (percentage > 80) {
      return 'danger';
    } else {
      return 'warning';
    }
  };
  console.log('budget data', data);
  return (
    <>
      <BudgetsHolder>
        <BudgetsInfo>
          <h1>Here are your Budgets for this month</h1>
          <p>
            You saved this much in this category from your budgeting this month.
          </p>
        </BudgetsInfo>

        <BudgetsInfo>
          {/* key represents spending categories */}
          {Object.keys(data).map(key => {
            console.log(key);
            return (
              <>
                <h6>{key}</h6>
                <ProgressBar
                  label={`${data[key].currSpending}`}
                  now={(data[key].currSpending / data[key].maxSpending) * 100}
                  animated
                  striped
                  variant={checkProgressColor(
                    (data[key].currSpending / data[key].maxSpending) * 100
                  )}
                />
                <p>Spending Limit: ${data[key].maxSpending}</p>
              </>
            );
          })}
        </BudgetsInfo>
      </BudgetsHolder>
    </>
  );
}

export default Budgets;
