// Import react and testing library
import React from 'react'
import { render } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'
// Added router to be able to test
import { BrowserRouter as Router } from 'react-router-dom'

import Signin from './Signin'

// Test to check that the app will display when called.
describe('<Signin />', () => {
  it('should display', () => {
    render(<Router><Signin /></Router>);
  })
  // Create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Router><Signin/></Router>); // Generates a DOM tree

    // Snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})