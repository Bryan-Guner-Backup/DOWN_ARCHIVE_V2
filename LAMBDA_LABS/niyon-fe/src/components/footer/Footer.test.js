import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import { MemoryRouter } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { DarkModeContext } from '../../DarkModeContext'
import Footer from './Footer'
import { signOut } from '../apiStuff/signout';

const setUp = (props = {}) => {
  const darkMode=false;
  const user ={}
  const setDarkMode = jest.fn()
  const setUser = jest.fn()
  const wrapper = mount(
    <MemoryRouter initialEntries={['/footer']}>
  <UserContext.Provider  value={{user, setUser}} >
    <DarkModeContext.Provider value={{darkMode, setDarkMode}} >
    <Footer {...props} />
    </DarkModeContext.Provider>
  </UserContext.Provider>
  </MemoryRouter>)
  return wrapper
}

const mockedObj = {
  signOut
}

describe('<Footer /> component testing', () => {
  let component
  const mockFn = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  const mockSignOut = jest.spyOn(mockedObj, 'signOut')
  useStateSpy.mockImplementation((init) => [init, mockFn])
  beforeEach(() => {
    component = setUp()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should match the snapshot test for  <Footer /> component', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })
  it('should render <Footer /> component correctly', () => {
    // console.log(component.debug())
    expect(component.exists()).toBe(true)
  })

  describe('<Menu /> testing', () => {
    let menu
    beforeEach(() => {
      menu = component.find('WithStyles(ForwardRef(Menu))')
    })
    it('should render <Menu /> correctly', () => {
      expect(menu.exists()).toBe(true)
      expect(menu.length).toBe(1)
      // console.log(component.dive().debug())
    })
    it('should trigger close functionality when click onClose', () => {
      const handleClose = () => mockFn()
      menu.props().onClose(handleClose)
      expect(mockFn).toHaveBeenCalled()
    })
    it('should render two <MenuItems /> correctly', () => {
      const menuItem = menu.find('WithStyles(ForwardRef(MenuItem))')
      expect(menuItem.length).toBe(2)
    })

    // it('should change state value when clicked on the first MenuItem', () => {
    //   const firstMenuItem = menu.find('WithStyles(ForwardRef(MenuItem))').at(0)
    //   const setDarkMode = jest.fn()
    //   firstMenuItem.props().onClick(setDarkMode)
    //   expect(setDarkMode).toHaveBeenCalled()
    // })

    it('should change the state value when clicked on the second Menuitem', () => {
      const secondMenuItem = menu.find('WithStyles(ForwardRef(MenuItem))').at(1)
      const e = { preventDefault: jest.fn() }
      secondMenuItem.props().onClick(mockSignOut())
      expect(mockSignOut).toHaveBeenCalled()
    })
  })

  describe('<ButtomNavigation /> component', () => {
    let navigation
    beforeEach(() => {
      navigation = component.find('WithStyles(ForwardRef(BottomNavigation))')
    })

    it('should render <BottomNavigation /> correctly', () => {
      expect(navigation.length).toBe(1)
    })

    it('should render <BottomNavigationAction /> components(5) with no errors', () => {
      const actionNavigation = navigation.find('WithStyles(ForwardRef(BottomNavigationAction))')
      expect(actionNavigation.length).toBe(5)
    })

    // it('should set the state when clicked on the last navigation button', () => {
    //   const lastNavigationButton = navigation.find('WithStyles(ForwardRef(BottomNavigationAction))').at(3)
    //   console.log(lastNavigationButton.debug());
    //   const handleClick = () => mockFn()
    //   lastNavigationButton.simulate('click')
    //   expect(mockFn).toHaveBeenCalled()
    // })
  })
})
