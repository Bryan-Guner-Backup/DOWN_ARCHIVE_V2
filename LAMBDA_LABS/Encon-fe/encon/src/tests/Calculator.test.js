import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Calculator } from '.././components/mobile/Calculator';

test('should render Calculator component ', () => {
  render(
    <Router>
      <Calculator />
    </Router>
  );
});

test('check for text', () => {
  const { getByText } = render(
    <Router>
      <Calculator />
    </Router>
  );
  const register = getByText(/register/i);
  expect(register).toBeInTheDocument();
});
// trying to figure out how to test calculator
test('should show the correct outputs given inputs', async () => {
  const { getByText, getByTestId } = render(
    <Router>
      <Calculator />
    </Router>
  );
  const deviceButton = getByTestId('desktop');
  const stateInput = getByText(/texas/i);
  const hoursInput = getByTestId('hourlyUse');
  const daysInput = getByTestId('daysPerWeek');

  act(() => {
    fireEvent.change(deviceButton, { target: { value: 'Computer Desktop' } });
    fireEvent.change(stateInput, {
      target: { value: 'Texas' },
    });
    fireEvent.change(hoursInput, {
      target: { value: 5 },
    });
    fireEvent.change(daysInput, {
      target: { value: 5 },
    });
  });
  const costPerYear = getByTestId('costPerYear');
  const energyUsed = getByTestId('energyUsed');
  await expect(costPerYear).toContain(0);
  await expect(energyUsed).toContain(0);
});
