import React from 'react';
import { shallow,mount } from 'enzyme';
import { Form }from 'formik';
import toJSON from 'enzyme-to-json';
import Login from './Login';



describe('<Login /> component testing', () => {
  let component
  let onMockSubmit
  beforeEach(() => {
    onMockSubmit = () => jest.fn()
    component = shallow(<Login onSubmit={onMockSubmit} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should pass snaps shot testing', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render <Login /> component correctly', () => {   
    expect(component.exists()).toBe(true)
  })

  it('should render form correctly', () => {
    // console.log(component.dive().dive().debug())
    expect(component.find(Form)).toBeTruthy()
  })

 it('should render the input element for email field', () => {
    expect(component.find('input[name="email"]')).toBeTruthy()
  })


  it('should render the input element for password field', () => {
    expect(component.find('input[name="password"]')).toBeTruthy()
  })

  it('should render the submit button correctly', () => {
    expect(component.find('[data-test="submit"]')).toBeTruthy()
  })

  it('it should submit the form when user clicks the submit button', () => {
    const form = mount(<Login/>)
       const submitButton = form.find(".button")
       submitButton.simulate('click')
      
  })
  
})
