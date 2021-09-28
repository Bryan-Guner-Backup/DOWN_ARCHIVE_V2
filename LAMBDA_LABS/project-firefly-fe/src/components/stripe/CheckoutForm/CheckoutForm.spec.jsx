// Import react and testing library
import React from 'react'
import { render } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import CheckoutForm from './CheckoutForm'

// Test to check that the app will display when called.
describe('<CheckoutForm />', () => {
  it('should display', () => {
    // render(<CheckoutForm/>);
  })
  // Create a snapshot
  it('matches snapshot', () => {
    // const tree = renderer.create(<CheckoutForm />); // Generates a DOM tree

    // // Snapshots are a JSON representation of the DOM tree
    // expect(tree.toJSON()).toMatchSnapshot();
  });
})