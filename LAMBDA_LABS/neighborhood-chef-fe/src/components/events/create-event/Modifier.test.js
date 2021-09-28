import React from 'react';
import Modifier from './Modifier.js';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

describe('Test Modifier component', () => {
  let ModifierComponent;
  beforeEach(() => {
    ModifierComponent = render(
      <BrowserRouter>
        <Modifier
          modifier={{ id: 1, title: '18+', active: false, icon: 'bottle icon' }}
        />
      </BrowserRouter>
    );
  });

  test('Modifier component renders with text from props', () => {
    expect(ModifierComponent.getByText(/18+/i));
  });
});
