import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotFoundPage } from '../components/pages/NotFound';

describe('Loading Common Component', () => {
  test('it should mount a div based on props for h1', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const h1 = getByText(/404 page not found/i);
    expect(h1.textContent).toBe('404 Page Not Found');
  });
  test('it should mount a div based on props for h2', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const h2 = getByText(/Sorry for the inconvenience/i);
    expect(h2.textContent).toBe('Sorry for the inconvenience');
  });
  test('it should mount a div based on props for h2', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const h2second = getByText(
      /The page you followed might have been removed, or the link might be broken/i
    );
    expect(h2second.textContent).toBe(
      'The page you followed might have been removed, or the link might be broken'
    );
  });
});
