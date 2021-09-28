import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import EventCard from './EventCard';

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
          <EventCard />
        </BrowserRouter>,
    );
  });
});