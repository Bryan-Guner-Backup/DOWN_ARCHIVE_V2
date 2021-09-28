import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Profile from './Profile';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {},
      authService: {}
  };
}
}));

describe('DashboardPage', () => {
  test('renders Dashboard component', () => {
    render(
        <BrowserRouter>
          <Profile />
        </BrowserRouter>,
    );
  });
});