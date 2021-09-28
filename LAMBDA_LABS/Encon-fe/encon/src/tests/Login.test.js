import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Login } from '.././components/mobile/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import 'mutationobserver-shim';

test('renders login without crashing', () => {
  render(
    <Router>
      <Login />
    </Router>
  );
});

test('Login form will submit', () => {
  const { getByLabelText, getByTestId } = render(<Login />);

  const emailInput = getByLabelText(/Email/i);
  const passWordInput = getByLabelText(/Password/i);

  const submitButton = getByTestId('sign in');
  act(() => {
    fireEvent.change(emailInput, {
      target: { name: 'Email', value: 'BenB@ben.com' },
    });
    fireEvent.change(passWordInput, {
      target: { name: 'Password', value: '123456' },
    });

    fireEvent.click(submitButton);
  });
});
