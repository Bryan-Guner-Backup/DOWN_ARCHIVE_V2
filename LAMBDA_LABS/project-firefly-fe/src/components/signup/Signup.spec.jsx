// Import react and testing library
import React from 'react'
import { render } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import Signup from './Signup'

// Test to check that the app will display when called.
describe('<Signup />', () => {
  it('should display', () => {
    render(<Signup/>);
  })
  // Create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Signup />); // Generates a DOM tree

    // Snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})