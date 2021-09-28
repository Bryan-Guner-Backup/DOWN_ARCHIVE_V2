import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import DashNavbar from './DashboardNav';

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
          <DashNavbar />
        </BrowserRouter>,
    );
  });
});