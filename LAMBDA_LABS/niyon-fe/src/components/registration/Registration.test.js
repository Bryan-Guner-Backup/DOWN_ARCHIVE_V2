import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Registration from './Registration'

describe('<Registration /> component testing', () => {
  let component
  let mockSubmit
  beforeEach(() => {
    mockSubmit = jest.fn()
    component = shallow(<Registration onSubmit={mockSubmit} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should pass snaps shot testing', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render <Registration /> component correctly', () => {
    expect(component.exists()).toBe(true)
  })

  it('should render form correctly with class name formRegister', () => {
    expect(component.find('form').exists()).toBe(true)
    expect(component.find('form').hasClass('formRegister')).toBe(true)
  })

  it('should render the div container correctly', () => {
    expect(component.find('div').at(0).exists()).toBe(true)
  })

  it('should render the input for email correctly', () => {
    expect(component.find('input').at(0).exists()).toBe(true)
  })

  it('should render the input for email correctly', () => {
    expect(component.find('input').at(1).exists()).toBe(true)
  })

  it('should render select element', () => {
    expect(component.find('select').length).toBe(1)
  })

  it('should render Mentor section', () => {
    expect(component.find('select').find('option').at(0).text()).toEqual('Mentor')
  })

  it('should render Mentee section', () => {
    expect(component.find('select').find('option').at(1).text()).toEqual('Mentee')
  })

  it('should render submit button correctly with its text', () => {
    const button = component.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toEqual('Register')
  })
})
