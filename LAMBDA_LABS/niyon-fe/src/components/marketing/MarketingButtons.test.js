import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import Button from '@material-ui/core/Button'
import findByTestAttr from '../../tests/utils'
import MarketingButtons from './MarketingButtons'

const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<MarketingButtons />)
  return wrapper
}

describe('Marketing container testing', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('should pass snapshot testing correctly', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render Marketing container correctly', () => {
    const mainContainer = findByTestAttr(component, 'marketing-container')
    expect(mainContainer.length).toBe(1)
  })

  it('should render second container div correctly', () => {
    const secondContainer = findByTestAttr(component, 'marketing-second-container')
    expect(secondContainer.length).toBe(1)
  })

  it('should render container title correctly', () => {
    const h3 = findByTestAttr(component, 'container-title')
    expect(h3.length).toBe(1)
    expect(h3.text()).toEqual('Connect with Mentors in your area!')
  })
  it('should render buttons container correctly', () => {
    const buttonsContainer = findByTestAttr(component, 'buttons-container')
    expect(buttonsContainer.length).toBe(1)
  })

  it('should render Sign Up button with no errors', () => {
    const signUpButton = findByTestAttr(component, 'buttons-container').find(Button).at(0)
    expect(signUpButton.exists()).toBe(true)
    expect(signUpButton.text()).toEqual('Sign Up')
  })

  it('should render Login button with no errors', () => {
    const logInButton = findByTestAttr(component, 'buttons-container').find(Button).at(1)
    expect(logInButton.exists()).toBe(true)
    expect(logInButton.text()).toEqual('Login')
  })
})
