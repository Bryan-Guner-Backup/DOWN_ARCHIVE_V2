import React from 'react'
import { mount } from 'enzyme'
import Home from './Home'
import * as axios from "axios";
import { MemoryRouter } from 'react-router-dom'
import { DarkModeContext } from '../../DarkModeContext'
import findByTestAttr from '../../tests/utils'
import { UserContext } from '../../UserContext'
import { fakeServer } from 'sinon'

jest.mock("axios");
const response = {
  data: {
    bio: 'test-bio',
    email: 'test@gmail.com',
    first_name: 'test-fn',
    id: 64,
    job_title: 'test-job-title',
    job_title_id: 2,
    last_name: 'test-ln',
    location: 'location-1, location-2',
    location_id: 2,
    myConnections: [],
    myRequests: [],
    mySentRequests: [],
    techs: [],
    user_type: 'test-mentor'
  }
}





describe('<Home /> component testing', () => {
  // const axiosWithMock = jest.fn(() => {setUser({...response.data})})
  const setUser = jest.fn()
  const darkMode=false;
  const setDarkMode = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setUser])
  const axiosWithMock = axios.get.mockImplementation(() => Promise.resolve({ data: {...response.data} }));
  const useEffect = jest.spyOn(React, 'useEffect').mockImplementation( async (response) => await axiosWithMock().then((response => {
         if(response) {
          setUser({...response})
         }
          })), [])
  const user = {}
  let component
  let server
  useEffect()
  beforeEach((done) => {
    const id = window.localStorage.getItem('id')
    server = fakeServer.create()
    server.respondWith(
      'GET',
        `https://niyon-app.herokuapp.com/profiles/${id}`,
        [
          200,
          { 'Content-Type': 'application/json' },
          JSON.stringify(response)
        ]
    )
    component = mount(<UserContext.Provider value={{ user, setUser }}>
    <DarkModeContext.Provider value={{darkMode, setDarkMode}} >     
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
      </DarkModeContext.Provider>
    </UserContext.Provider>)
    server.respond()
    setTimeout(done)
  })

  it('should render the <Home /> component correctly', () => {
    const homeContainer = findByTestAttr(component, 'home-container')
    expect(homeContainer.length).toBe(1)
  })

  it('should render <Header /> component correctly', () => {
    expect(component.find('Header')).toHaveLength(1)
  })

  it('should render <Connections /> component correctly', () => {
    expect(component.find('Connections')).toHaveLength(1)
  })

  it('should render <ConnectionRequests /> component correctly', () => {
    expect(component.find('ConnectionRequests')).toHaveLength(1)
  })

  it('should render <Footer /> component correctly', () => {
       expect(component.find('Footer')).toHaveLength(1);
  });
    
});
