// Import react and testing library
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import Hub from './Hub'

// Test to check that the app will display when called.
describe('<Hub />', () => {
  it('should display', () => {
    render(<Hub/>) 
  })
  // Create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Hub />); // Generates a DOM tree

    // Snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  // Start the Game
  it('starts up the game', () => {
    // // Create a spy with jest
    // const spy = jest.fn()
    // // Render the component
    // const {getByText}= render(<Hub />)
    // // Grab the button 
    // const button = getByText(/play firefly/i)
    // // Fire the click event for the button
    // fireEvent.click(button)
    // // Check if the spy was called when toggleClosed was pressed
    // expect(spy).toBeCalled()
  })
})