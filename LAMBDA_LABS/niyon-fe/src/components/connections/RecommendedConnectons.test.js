import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import RecommendedConnections from './RecommendedConnections'

describe('<RecommendedConnections /> component', () => {
  let component
  beforeEach(() => {
    component = shallow(<RecommendedConnections />)
  })

  it('should match the snapshot test', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render the component correctly', () => {
    expect(component.exists()).toBe(true)
  })
})
