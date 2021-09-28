import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotFoundPage } from '../components/pages/NotFound';

describe('Loading Common Component', () => {
  test('it should mount a button based on a link', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const link = getByText(/Back To Account/i);
    expect(link.textContent).toBe('Back To Account');
  });
  test('it should mount a button based on an a href', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const href = getByText(/SaverLife Home/i);
    expect(href.textContent).toBe('SaverLife Home');
  });
  test('it should mount a button based on an a href', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const href2 = getByText(/SaverLife Help/i);
    expect(href2.textContent).toBe('SaverLife Help');
  });
});

describe('click buttons', () => {
  test('click home button', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const clickButton = getByText(/SaverLife Home/i);
    fireEvent.click(clickButton);
    expect(clickButton.innerHTML).toBe('SaverLife Home');
  });
  test('click help button', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const clickButton = getByText(/SaverLife Help/i);
    fireEvent.click(clickButton);
    expect(clickButton.innerHTML).toBe('SaverLife Help');
  });
  test('click account button', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const clickButton = getByText(/Back To Account/i);
    fireEvent.click(clickButton);
    expect(clickButton.innerHTML).toBe('Back To Account');
  });
});
