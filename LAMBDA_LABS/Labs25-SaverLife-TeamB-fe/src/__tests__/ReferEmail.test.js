import React from 'react';
import { render } from '@testing-library/react';
import { HeaderContainer } from '../components/pages/Home/styles/HomeStyles';

describe('Loading Common Component', () => {
  test('it should mount a div based on props for h1', () => {
    const { getByText } = render(
      <HeaderContainer>
        <h1>Refer a Friend!</h1>
      </HeaderContainer>
    );
    const h1 = getByText(/Refer a Friend!/i);
    expect(h1.textContent).toBe('Refer a Friend!');
  });
});
