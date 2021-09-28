import React from 'react';
import { render, waitFor } from '@testing-library/react';
import GraphCarousel from '../components/graphs/GraphCarousel';

describe('Loading the Carousel', () => {
  test('it should render the carousel to the screen', async () => {
    const { getByText } = render(
      <GraphCarousel>
        <div>
          <h1>one</h1>
        </div>
        <div>
          <h1>two</h1>
        </div>
      </GraphCarousel>
    );
    await waitFor(() => {
      expect(getByText(/one/i)).toBeVisible();
    });
  });
});
