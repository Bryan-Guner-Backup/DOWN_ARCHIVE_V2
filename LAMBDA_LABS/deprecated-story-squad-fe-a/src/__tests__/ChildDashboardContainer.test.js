import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ChildLoadingComponent } from '../components/common';
import { ChildDashboard } from '../components/pages/ChildDashboard';

const mockStore = configureStore([]);
const store = mockStore();

afterEach(cleanup);

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {
        getUser: () => Promise.reject(),
      },
    };
  },
}));

describe('<ChildDashboard /> test suite', () => {
  test('container renders without crashing', async () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <ChildDashboard LoadingComponent={ChildLoadingComponent} />
        </Provider>
      </Router>
    );
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});
