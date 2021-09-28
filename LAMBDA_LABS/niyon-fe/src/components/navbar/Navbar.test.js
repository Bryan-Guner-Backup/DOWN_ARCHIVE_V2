import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import findByTestAttr from '../../tests/utils'
import Navbar from './Navbar'

const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<Navbar />)
  return wrapper
}

describe('<Marketing /> component testing', () => {
  let component
  const setState = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState])
  beforeEach(() => {
    component = setUp()
  })

  it('should pass snapshot testing correctly', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render <Marketing /> component correctly', () => {
    const marketingWrapper = findByTestAttr(component, 'navbar-container')
    expect(marketingWrapper.length).toBe(1)
  })

  it('should render  <CssBaseline /> component with no errors', () => {
    expect(component.find(CssBaseline)).toHaveLength(1)
  })

  it('should render <AppBar /> component correctly', () => {
    expect(component.find(AppBar)).toHaveLength(1)
  })
  it('should render <Toolbar /> component correctly', () => {
    expect(component.find(Toolbar)).toHaveLength(1)
  })
  it('should render <IconButton /> component correctly', () => {
    expect(component.find(Toolbar).find(IconButton)).toHaveLength(1)
  })

  it('should render <MenuIcon /> component correctly', () => {
    expect(component.find(MenuIcon)).toHaveLength(1)
  })

  it('should render title content with no errors', () => {
    expect(component.find(Typography)).toHaveLength(1)
    expect(component.find(Typography).text()).toEqual('Niyon')
  })

  it('should render navbar component correctly', () => {
    expect(component.find('.makeStyles-drawer-2').exists()).toBe(true)
  })

  describe('First <Hidden /> component', () => {
    it('should render <Hidden /> with smUp attribute correctly', () => {
      const hiddenWrapper1 = component.find(Hidden).at(0)
      expect(hiddenWrapper1.exists()).toBe(true)
      expect(hiddenWrapper1.props().smUp).toEqual(true)
    })
    it('should render the <Drawer /> component correctly', () => {
      const hiddenWrapper1 = component.find(Hidden).at(0)
      expect(hiddenWrapper1.find(Drawer)).toHaveLength(1)
    })
    it('should render <IconButton /> inside <Drawer /> component correctly', () => {
      const hiddenWrapper1 = component.find(Hidden).at(0)
      expect(hiddenWrapper1.find(Drawer).find(IconButton)).toHaveLength(1)
    })
  })

  describe('Second <Hidden /> component', () => {
    it('should render <Hidden /> with xsDown attribute correctly', () => {
      const hiddenWrapper2 = component.find(Hidden).at(1)
      expect(hiddenWrapper2.exists()).toBe(true)
      expect(hiddenWrapper2.props().xsDown).toEqual(true)
    })
    it('should render the <Drawer /> component correctly', () => {
      const hiddenWrapper2 = component.find(Hidden).at(1)
      expect(hiddenWrapper2.find(Drawer)).toHaveLength(1)
    })
    it('should render a <Div /> inside <Drawer /> component correctly', () => {
      const hiddenWrapper2 = component.find(Hidden).at(1)
      expect(hiddenWrapper2.find('.makeStyles-toolbar-5').exists()).toBe(true)
    })
  })

  describe('Actions in <Navbar /> component', () => {
    it('should toggle the first IconButton', () => {
      const handleDrawerToggle = () => jest.fn()
      component.find(Toolbar)
        .find(IconButton)
        .props()
        .onClick(handleDrawerToggle)
      expect(setState).toHaveBeenCalled()
    })

    it('should toggle the first Drawer', () => {
      const handleDrawerToggle = () => jest.fn()
      component.find(Hidden)
        .at(0)
        .find(Drawer)
        .props()
        .onClose(handleDrawerToggle)
      expect(setState).toHaveBeenCalled()
    })
  })
})
