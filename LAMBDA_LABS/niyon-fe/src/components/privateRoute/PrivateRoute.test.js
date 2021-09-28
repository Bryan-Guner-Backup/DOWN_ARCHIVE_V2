import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { PrivateRoute } from './PrivateRoute'
import { Redirect } from 'react-router-dom'
import { mockDiv } from '../../tests/mocks'

const setUp = (props = {}) => {
  const expectedProps = {
    component: mockDiv,
    isAuthenticated: false,
    ...props
  }
  const wrapper = shallow(<PrivateRoute {...expectedProps} />)
  return {
    wrapper,
    expectedProps
  }
}

describe('<Routes />', () => {
  let component
  beforeEach(() => {
    component = shallow(<PrivateRoute />)
  })

  it('should pass snapshot testing', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render the component correctly', () => {
    expect(component.exists()).toBe(true)
  })
  describe('Verifying Routes are secured', () => {
    it('should pass proper props to the routes', () => {
      const { wrapper } = setUp({ path: '/lambda-school' })
      expect(wrapper.find('Route').prop('path')).toBe('/lambda-school')
    })
    it('should redirect the user to login page if user has not been authenticated', () => {
      const { wrapper } = setUp()
      const Component = wrapper.prop('render')
      const redirect = shallow(<Component location="/lambda-school" />)
      expect(redirect.find(Redirect).props()).toEqual({ to: '/login' })
    })

    it('should render the correct component if the user has been authenticated', () => {
      const { wrapper } = setUp({ isAuthenticated: true })
      const Component = wrapper.prop('render')
      const authComponent = shallow(<Component location="/lambda-school" />)
      expect(authComponent.props()).toEqual({ location: '/lambda-school' })
    })
  })
})
