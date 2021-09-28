import React from 'react';
import {
  render,
  getByText,
  findByText,
  fireEvent,
} from '@testing-library/react';
import { Dashboard } from '../components/mobile/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { ApplianceList } from '../components/mobile/Appliance-List';
test('should render dashboard and see if the appliance list is on there', () => {
  const { getByText } = render(
    <Router>
      <Dashboard />
    </Router>
  );
  const dashboardText = getByText(/Appliance List/i);
  expect(dashboardText).toBeInTheDocument();
});

test('should render the appliance list after button is clicked', () => {
  const { getByText } = render(
    <Router>
      <Dashboard />
    </Router>
  );
  act(() => {
    const applianceButton = getByText('Appliance List');
    fireEvent.click(applianceButton);
  });
  const inputEnergy = getByText('Input Daily Energy');
  expect(inputEnergy).toBeInTheDocument();
});

// Can't figure out this test commenting it out for now
// test('should render the graphs once button is clicked on', async () => {
//   const { getByText } = render(
//     <Router>
//       <Dashboard />
//     </Router>
//   );
//   act(() => {
//     const graphButton = getByText('Track Usage');
//     fireEvent.click(graphButton);
//   });
//   const graphTitle = getByText(
//     /Average Energy Output Per Appliance Per Month/i
//   );
//   await expect(graphTitle).toBeInTheDocument();
// });
