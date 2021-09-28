import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Marketing from './Marketing'
import findByTestAttr from '../../tests/utils'
// import Navbar from '../navbar/Navbar';
// import Marketingbuttons from './Marketingbuttons';

describe('<Marketing /> component testing', () => {
  let component
  beforeEach(() => {
    component = shallow(<Marketing />)
  })
  it('should match the snapshot testing', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render the <Marketing /> component correctly', () => {
    expect(component.exists()).toBe(true)
    const marketingDiv = findByTestAttr(component, 'marketing')
    expect(marketingDiv.length).toBe(1)
  })

  it('should render <Navbar /> component correctly', () => {
    expect(component.find('Navbar').exists()).toBe(true)
  })

  it('should render <MarketingButtons /> component correctly', () => {
    expect(component.find('MarketingButtons').exists()).toBe(true)
  })
})
