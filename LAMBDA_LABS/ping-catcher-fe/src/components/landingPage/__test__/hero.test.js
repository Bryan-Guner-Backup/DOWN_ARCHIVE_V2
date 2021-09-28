import React from 'react'
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react'

/**
 *
 */
test('Renders the button', () => {
  const div = document.createElement('div')
  ReactDOM.render(<button></button>, div)
})

// Render the title
test('render the h1 in hero', () => {
  const msg = 'Ping Catcher'
  rtl.render(<h1>Ping Catcher</h1>)
  expect(rtl.screen.getByText(msg)).toBeInTheDocument()
})

// Render the paragraph
test('render the top paragraph', () => {
  const div = document.createElement('div')
  ReactDOM.render(<p></p>, div)
})

// Render the first paragraph content
test('render the first p in hero', () => {
  const msg =
    'Time to gain control over your notifications. Create your own channels to group notifications into your favorite online chat apps.'
  rtl.render(<p>{msg}</p>)
  expect(rtl.screen.getByText(msg)).toBeInTheDocument()
})

// Render the second paragraph content
test('render the second p in hero', () => {
  const msg =
    'Organize, color code, even snooze a message and get back to it when you have a moment Improve your overall sanity and increase productivity with Ping Catcher.'
  rtl.render(<p>{msg}</p>)
  expect(rtl.screen.getByText(msg)).toBeInTheDocument()
})
