import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import ConnectionRequests from './ConnectionRequests'

describe('<ConnectionRequests /> component', () => {
  let component
  beforeEach(() => {
    component = shallow(<ConnectionRequests />)
  })

  it('should match the snapshot test', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render the component correctly', () => {
    expect(component.exists()).toBe(true)
  })
})
