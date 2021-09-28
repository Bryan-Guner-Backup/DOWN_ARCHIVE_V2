import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { HeaderContainer } from '../components/pages/Home/styles/HomeStyles';

describe('<RenderHomePage /> test suite', () => {
  test('it handles a loading state', () => {
    const { getByText } = render(
      <Router>
        <HeaderContainer>
          <h1>Your Documented Spending and Saving History</h1>
        </HeaderContainer>
      </Router>
    );
    const h1 = getByText(/Your Documented Spending and Saving History/i);
    expect(h1.textContent).toBe('Your Documented Spending and Saving History');
  });
});
