import React from 'react'
import toJSON from 'enzyme-to-json'
import { location } from './location'

describe('Testing locations', () => {
  it('should render locations array correctly', () => {
    expect(location).toEqual(expect.arrayContaining(location))
  })

  it('should pass a snapshot test correctly', () => {
    expect(toJSON(location)).toMatchSnapshot()
  })
})
