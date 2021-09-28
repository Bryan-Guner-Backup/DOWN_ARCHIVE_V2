import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Header from './Header'
import findByTestAttr from '../../tests/utils'

const setUp = (props = {}) => {
  const wrapper = shallow(<Header />)
  return wrapper
}

describe('<Header /> component testing', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('should render <Header /> component correctly', () => {
    const headerWrapper = findByTestAttr(component, 'header-container')
    expect(headerWrapper.length).toBe(1)
  })

  it('should render  <CssBaseline /> correctly', () => {
    expect(component.find(CssBaseline)).toHaveLength(1)
  })

  it('should render <AppBar /> correctly', () => {
    expect(component.find(AppBar)).toHaveLength(1)
  })

  it('should render <Toolbar /> correctly', () => {
    expect(component.find(Toolbar)).toHaveLength(1)
  })
  it('should render logo container <Div /> correctly', () => {
    const logoWrapper = findByTestAttr(component, 'logo')
    expect(logoWrapper.length).toBe(1)
  })
  it('should render title container <Div /> correctly', () => {
    const titleDiv = findByTestAttr(component, 'title-and-button')
    expect(titleDiv.length).toBe(1)
  })

  it('should render <Typography /> correctly', () => {
    expect(component.find(Typography)).toHaveLength(1)
  })

  it('should render header title with no errors', () => {
    expect(component.find(Typography).text()).toEqual('Welcome, !')
  })
})
