import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom'
import SlackCard from '../infoCard/SlackCard'

describe('renders the Slack card', () => {
  it('has image that displays on card', () => {
    const simulatedDOM = rtl.render(<SlackCard />)
    const image = simulatedDOM.getByTestId('at-img')
    expect(image).toBeInTheDocument()
  })

  it('has h2 element that displays Slack', () => {
    const simulatedDOM = rtl.render(<SlackCard />)
    const titleh2 = simulatedDOM.queryAllByText(/Slack/i)
    expect(titleh2).toBeTruthy()
  })

  it('has p tag that displays desc text', () => {
    const simulatedDOM = rtl.render(<SlackCard />)
    const descp = simulatedDOM.getByText(
      /Current version is built for slack. Secured with Okta and fully immersed within the Slack api./i
    )
    expect(descp).toBeInTheDocument()
  })
})
