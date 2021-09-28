import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import DashSettings from './DashSettings';

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
          <DashSettings />
        </BrowserRouter>,
    );
  });
});