// Import react and testing library
import React from 'react'
import { render } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import Profile from './Profile'

// Test to check that the app will display when called.
describe('<Profile />', () => {
  it('should display', () => {
    render(<Profile/>);
  })
  // Create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Profile />); // Generates a DOM tree

    // Snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})