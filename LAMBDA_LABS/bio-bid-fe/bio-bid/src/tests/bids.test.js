import React from 'react';
import { render, screen, act, wait } from '@testing-library/react';
import Bids from '../components/bids';

import { MockedProvider } from '@apollo/react-testing';
import { GET_STUDIES } from '../queries';

const studyMock = [
    {
        request: {
            query: GET_STUDIES
        },
        result: {
            data: {
                studies: [
                    {
                        id: 1,
                        name: "my awesome study",
                        area: 'awesomeness',
                        protocol_number: "ABZ-123",
                        title: "Atest",
                        phase: 0,
                        modified_date: Date.now(),
                        status: "Open"
                    }
                ]
            }
        }
    }
]

test('Bids is displayed in the dashboard', async () => {
    render(
        <MockedProvider
            mocks={studyMock}
            addTypename={false}
            defaultOptions={{
                watchQuery: { fetchPolicy: 'no-cache' },
                query: { fetchPolicy: 'no-cache' },
            }}>
            <Bids />
        </MockedProvider>
    );

    await act(() => wait(async () => {
        const bidsText = /bids/i;
        const foundText = await screen.findByText(bidsText);
        expect(foundText).toBeInTheDocument();
    }))
});

test('Name is displayed in the dashboard', async () => {
    render(
        <MockedProvider
            mocks={studyMock}
            addTypename={false}
            defaultOptions={{
                watchQuery: { fetchPolicy: 'no-cache' },
                query: { fetchPolicy: 'no-cache' },
            }}>
            <Bids />
        </MockedProvider>
    );
    await act(() => wait(async () => {
        const nameText = /name/i;
        const foundText = await screen.findByText(nameText);
        expect(foundText).toBeInTheDocument();
    }))
});

