import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom'
import NotifyCard from '../infoCard/NotifyCard'

describe('renders the Notify card', () => {
  it('has image that displays on card', () => {
    const simulatedDOM = rtl.render(<NotifyCard />)
    const image = simulatedDOM.getByTestId('at-img')
    expect(image).toBeInTheDocument()
  })

  it('has h2 element that displays Notification', () => {
    const simulatedDOM = rtl.render(<NotifyCard />)
    const titleh2 = simulatedDOM.getByText(/Notification/i)
    expect(titleh2).toBeInTheDocument()
  })

  it('has p tag that displays desc text', () => {
    const simulatedDOM = rtl.render(<NotifyCard />)
    const descp = simulatedDOM.getByText(
      /Never miss a ping directed to you. Snooze it and get right back to work!/i
    )
    expect(descp).toBeInTheDocument()
  })
})
