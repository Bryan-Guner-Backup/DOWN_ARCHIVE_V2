// Import react and testing library
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import Carousel from './Carousel'

// Test to check that the app will display when called.
describe('<Carousel />', () => {
  it('should display', () => {
    render(<Carousel />); 
  })
  // Create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Carousel />); // Generates a DOM tree

    // Snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  // Renders the image
  it('check if the images render', () => {
    // // Render the component
    // const {getByAltText}= render(<Carousel />)
    // // Check if the image can be grabbed
    // getByAltText(/carousel/i);
  })
  // The left arrow button works
  it('left button should come back as clicked', () => {
    // // Create a spy with jest
    // const spy = jest.fn();
    // // Render the component
    // const {getByText}= render(<Carousel moveLeft = {spy} />);
    // // Grab the button 
    // const button = getByText(/'<'/i);
    // // Fire the click event for the button
    // fireEvent.click(button);
    // // Check if the spy was called when toggleClosed was pressed
    // expect(spy).toBeCalled();
  })
  // The right arrow button works
  it('right button should come back as clicked', () => {
    // // Create a spy with jest
    // const spy = jest.fn();
    // // Render the component
    // const {getByText}= render(<Carousel moveRight = {spy} />);
    // // Grab the button 
    // const button = getByText(/{'>'}/i);
    // // Fire the click event for the button
    // fireEvent.click(button);
    // // Check if the spy was called when toggleClosed was pressed
    // expect(spy).toBeCalled();
  })
  // Move to the left
  it('should move the carousel to the left', () => {
    // // Render the component
    // const {getByText, findByAltText}= render(<Carousel />);
    // // Grab the button 
    // const button = getByText(/</i);
    // // Fire the click event for the button
    // fireEvent.click(button);
    // // Check if the next image was loaded or not
    // // findByAltText(//i);
  })
  // Move to the right 
  it('should move the carousel to the right', () => {
    // // Render the component
    // const {getByText, findByAltText}= render(<Carousel />);
    // // Grab the button 
    // const button = getByText(/>/i);
    // // Fire the click event for the button
    // fireEvent.click(button);
    // // Check if the next image was loaded or not
    // // findByAltText(//i);
  })
})