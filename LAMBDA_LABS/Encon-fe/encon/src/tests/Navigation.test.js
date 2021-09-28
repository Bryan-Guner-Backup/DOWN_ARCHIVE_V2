import React from 'react';
import { Navigation } from '.././components/mobile/Navigation';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

test('should render nav component correctly', () => {
  const { getByText } = render(
    <Router>
      <Navigation />
    </Router>
  );
  const homeButton = getByText('Home');
  const loginButton = getByText('Login');
  const registerButton = getByText('Register');
  expect(homeButton).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});
