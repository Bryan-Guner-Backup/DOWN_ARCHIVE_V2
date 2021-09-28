import React from 'react'
import { mount } from 'enzyme'
import { Search } from './Search'
import { MemoryRouter } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { DarkModeContext } from '../../DarkModeContext'
import findByTestAttr from '../../tests/utils'

describe('<Search /> component testing', () => {
  const darkMode=false;
  const setDarkMode = jest.fn()
  const user = {}
  const setUser = jest.fn()
  let component
  const profiles = []
  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={['/search']}>
        <UserContext.Provider value={{ user, setUser }}> 
          <DarkModeContext.Provider value={{darkMode, setDarkMode}} >      
            <Search />      
          </DarkModeContext.Provider>
        </UserContext.Provider>
      </MemoryRouter>
    )
  })

  it('should render the <Search /> component correctly', () => {
    expect(component.exists()).toBe(true)
  })

  it('should render <Header /> component correctly', () => {
    expect(component.find('Header').length).toBe(1)
  })

  it('should render container wrapper correctly', () => {
    const divContainer = findByTestAttr(component, 'search-container')
    expect(divContainer.length).toBe(1)
  })

  it('should render the selected job title paragraph correctly', () => {
     expect(component.find('p').length).toBe(3);
     expect(component.find('p')
                     .at(0)
                     .render()
                     .text()
                     .trim())
                     .toEqual('Users with Selected Job Title');
     expect(component.find('p')
                     .at(1)
                     .render()
                     .text()
                     .trim())
                     .toEqual('Users with Selected Location');  
     expect(component.find('p')
                     .at(2)
                     .render()
                     .text()
                     .trim())
                     .toEqual('Users with Selected Technology');                                        
    });

  it('it should change the job title on change correctly', () => {
      const jobSearch = findByTestAttr(component, 'job-title-search')
      jobSearch.first().props().onChange(handleChange)
      expect(setState).toHaveBeenCalled()
  })

  

  it('should render profiles container correctly', () => {
    const container = findByTestAttr(component, 'search-profile')
      if (profiles.length === 0) {
        expect(container.length).toBe(0)
      } else {
        expect(container.length).toBe(1)
      }
  })

  describe('<select /> component', () => {
      let selectWrapper;
      const setState = jest.fn();
      const useStateSpy = jest.spyOn(React, 'useState');
      useStateSpy.mockImplementation((init) => [init, setState]);      
      beforeEach(() => {
          selectWrapper = component.find('Select');
      });

      it('should render <Select />  component correctly', () => {
        expect(selectWrapper.exists()).toBe(true);
      
    });

    it('it should change the job title on change correctly', () => {
        const searchContainer = findByTestAttr(component, 'search-container');
        const select = findByTestAttr(searchContainer, 'job-title-search');  
        const handleChange = setState();        
        select.first().props().onChange(handleChange);
        expect(setState).toHaveBeenCalled();
    });
  });   

});
