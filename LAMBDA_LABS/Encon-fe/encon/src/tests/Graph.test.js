import React from 'react';
import { Graphs } from '.././components/mobile/Graphs';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

test('should render graph titles correctly', () => {
  const { getByText } = render(
    <Router>
      <Graphs />
    </Router>
  );
  const graphHeader1 = getByText(
    'Average Energy Output Per Appliance Per Month'
  );
  const graphHeader2 = getByText('Average Expenses');

  expect(graphHeader1).toBeInTheDocument();
  expect(graphHeader2).toBeInTheDocument();
});

test('should render graphs correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Graphs />
    </Router>
  );
  const energyOutputGraph = getByTestId('EnergyChart');

  expect(energyOutputGraph).toBeInTheDocument();
});
