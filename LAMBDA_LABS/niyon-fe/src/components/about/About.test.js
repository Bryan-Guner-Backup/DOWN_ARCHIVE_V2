import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import About from './About'
import findByTestAttr from '../../tests/utils'

const setUp = (props = {}) => {
  const component = shallow(<About {...props}/>)
  return component
}

describe('<About /> component testing', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('should pass the snap shot test', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render <About /> component correctly', () => {
    expect(component.length).toBe(1)
  })

  it('should render the <Navbar /> component correctly', () => {
    expect(component.find('Navbar').length).toBe(1)
  })
  it('should render  container div with no errors', () => {
    const container = findByTestAttr(component, 'aboutUs-container')
    expect(container.length).toBe(1)
  })

  it('should render title of the  component correctly', () => {
    expect(component.find('h1').text()).toEqual('Meet the Crew')
  })
  it('should render <PersonCard /> component correctly', () => {
    expect(component.find('PersonCard')).toHaveLength(1)
  })
})
