import React from 'react'
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'

import Footer from '../footer/Footer'

// test to render footer element
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer />, div)
})

//test to render props in footer title
test('render the h1 in footer', () => {
  const title = 'Ping Catcher'
  rtl.render(<h1>{title}</h1>)
  expect(rtl.screen.getByText(title)).toBeInTheDocument()
})
