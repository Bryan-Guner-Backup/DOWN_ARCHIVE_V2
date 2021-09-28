import React from 'react';
import { render, getByText } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LandingPage } from '.././components/mobile/Landing-Page';
import { Header } from '.././components/mobile/Header';
import { Calculator } from '.././components/mobile/Calculator';

test('should render the landing page correctly ', () => {
  const { getByText } = render(
    <Router>
      <LandingPage />
    </Router>
  );
  const headerText = getByText('Welcome to EnCon!');
  expect(headerText).toBeTruthy();
});
