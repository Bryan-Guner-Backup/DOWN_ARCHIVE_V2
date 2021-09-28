import React from 'react'
import toJSON from 'enzyme-to-json'
import { technology } from './technologies'

describe('Testing technologies', () => {
  it('should render technologies array correctly', () => {
    expect(technology).toEqual(expect.arrayContaining(technology))
  })

  it('should pass a snapshot test correctly', () => {
    expect(toJSON(technology)).toMatchSnapshot()
  })
})
