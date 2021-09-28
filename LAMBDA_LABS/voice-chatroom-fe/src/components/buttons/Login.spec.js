import React from 'react';
import Login from './Login';

import { render, fireEvent } from "@testing-library/react";
import { useOktaAuth } from '@okta/okta-react';
jest.mock("@okta/okta-react");

const login = jest.fn();

useOktaAuth.mockReturnValue({
    authService: {
        login,
    },
});

// test('should handle ClickEvents', () => {
//     const { getByText } = render(<Login />);
//     fireEvent.click(getByText('Log In'))
//     expect(login).toHaveBeenCalledTimes(1);
// });

it('should render button', () => {
    const { getByText } = render(< Login />);
    expect(getByText("Login / Register")).toBeInTheDocument();
});