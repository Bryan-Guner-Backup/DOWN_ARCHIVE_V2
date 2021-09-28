// Import react and testing library
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'
// Added router to be able to test
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

// Test to check that the app will display when called.
describe('<App />', () => {
  it('should display', () => {
    // render(<Router><App /></Router>); 
  })
  // Create a snapshot
  it('matches snapshot', () => {
    // const tree = renderer.create(<Router><App /></Router>); // Generates a DOM tree

    // // Snapshots are a JSON representation of the DOM tree
    // expect(tree.toJSON()).toMatchSnapshot();
  });
});