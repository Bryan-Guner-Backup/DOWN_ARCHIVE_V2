// Import react and testing library
import React from 'react'
import { render } from '@testing-library/react'
import { Elements, StripeProvider } from 'react-stripe-elements';
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import StripeParent from './StripeParent'

{/* <StripeProvider apiKey="pk_test_xD7MdD7FTPkqMIYlsq5vFvi300kToh9tFv"> */}
  // Test to check that the app will display when called.
  {describe('<StripeParent />', () => {
    it('should display', () => {
      // render(<StripeParent />);
    })
    // Create a snapshot
    it('matches snapshot', () => {
      // const tree = renderer.create(<StripeParent />); // Generates a DOM tree
      
      // // Snapshots are a JSON representation of the DOM tree
      // expect(tree.toJSON()).toMatchSnapshot();
    });
  })};
// </StripeProvider>