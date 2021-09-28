import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import  SwipeTabsJobTitle  from './SwipeTabsJobTitle'
import { MemoryRouter } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import findByTestAttr from '../../tests/utils'

describe('<SwipeTabsJobTitle />', () => {
   let wrapper
   const setUser = jest.fn()
   const user ={}
   const useStateSpy = jest.spyOn(React, 'useState')
   useStateSpy.mockImplementation((init) => [init, setUser])
   beforeEach(() => {
      wrapper = shallow(
        <UserContext.Provider value={{ user, setUser }}>
          <SwipeTabsJobTitle />
        </UserContext.Provider>
      )
   })

   it('should pass snapshot testing', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
   })
   it('should render <SwipeTabsJobTitle /> component correctly', () => {
        // console.log(wrapper.debug())
   })
})
