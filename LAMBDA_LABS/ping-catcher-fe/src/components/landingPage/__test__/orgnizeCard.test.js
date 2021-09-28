import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom'
import OrganizeCard from '../infoCard/OrganizeCard'

describe('renders the Notify card', () => {
  it('has image that displays on card', () => {
    const simulatedDOM = rtl.render(<OrganizeCard />)
    const image = simulatedDOM.getByTestId('at-img')
    expect(image).toBeInTheDocument()
  })

  it('has h2 element that displays Notification', () => {
    const simulatedDOM = rtl.render(<OrganizeCard />)
    const titleh2 = simulatedDOM.getByText(/Organize/i)
    expect(titleh2).toBeInTheDocument()
  })

  it('has p tag that displays desc text', () => {
    const simulatedDOM = rtl.render(<OrganizeCard />)
    const descp = simulatedDOM.getByText(
      /Create your own channels, subscriptions to collect those pings that are important to you./i
    )
    expect(descp).toBeInTheDocument()
  })
})
