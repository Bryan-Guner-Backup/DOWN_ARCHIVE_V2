import React from 'react'
import toJSON from 'enzyme-to-json'
import { job } from './job'

describe('Testing jobs', () => {
  it('should render jobs array correctly', () => {
    expect(job).toEqual(expect.arrayContaining(job))
  })

  it('should pass a snapshot test correctly', () => {
    expect(toJSON(job)).toMatchSnapshot()
  })
})
