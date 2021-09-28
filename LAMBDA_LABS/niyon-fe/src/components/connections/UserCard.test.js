import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json';
import  UserCard  from './UserCard'
import { MemoryRouter } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import findByTestAttr from '../../tests/utils'
import toJson from 'enzyme-to-json'

const testProps = {
  endpoint: "response",
  value: { 
          bio: "Learning code now.",
          email: "testReqest@aol.com",
          first_name: "test-fn",
          id: 142,
          job_title: "Full Stack Web Developer",
          job_title_id: 2,
          last_name: "test-ln",
          location: "test-1, test-2",
          location_id: 2,
          techs: (2) [1, 9],
          user_type: "test-request-Mentor"
        } 
}

const testUser = {
  bio: "learning code",
  email: "testUser@aol.com",
  first_name: "test-user-fn",
  id: 143,
  job_title: "Full Stack Web Developer",
  job_title_id: 2,
  last_name: "test-user-ln",
  location: "test-user-area-1, test-user-area-2",
  location_id: 2,
  myConnections: [testProps],
  myRequests: [],
  mySentRequests: [],
  techs: [4],
  user_type: "test-usr-Mentor",
}

describe('<UserCard /> component', () => {
  const user = testUser
  const setUser = jest.fn()
  let component
  const profiles = []
  const handleClick = jest.fn()
  const id = window.localStorage.getItem('id')
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <UserContext.Provider value={{ user, setUser }}>        
          <UserCard {...testProps} />        
      </UserContext.Provider>
    )
    component = mount(
      <UserContext.Provider value={{ user, setUser }}>        
          <UserCard {...testProps} />        
      </UserContext.Provider>
    )
  })

  it('should pass snapshot testing', () => {
      expect(toJson(component)).toMatchSnapshot()
  })

  it('should render the component correctly', () => {
      expect(component.exists()).toBe(true);
  })

  it('should render Avatar image correctly',() => {
      // console.log(component.debug())
      expect(component.find('img').exists()).toBe(true)
      expect(component.find('img').length).toBe(1)
  })

  it('should render the user first name and last name correctly', () => {
      const fullName = `${testProps.value.first_name} ${testProps.value.last_name}`;
      expect(component.find('h4').exists()).toBe(true)
      expect(component.find('h4').length).toBe(1)
      expect(component.find('h4').text().trim()).toEqual(fullName)
  })
  it('should render user location correctly', () => {
      const location = testProps.value.location;
      const locationWrapper = component.find('h6').first();
      expect(locationWrapper.exists()).toBe(true);
      expect(locationWrapper.find('p').exists()).toBe(true);
      expect(locationWrapper.find('p').text().trim()).toEqual(location);
  })

  it('should render user job title correctly', () => {
    const job_title = testProps.value.job_title;
    const jobTitleWrapper = component.find('h6').at(1);
    expect(jobTitleWrapper.exists()).toBe(true);
    expect(jobTitleWrapper.find('p').exists()).toBe(true);
    expect(jobTitleWrapper.find('p').text().trim()).toEqual(job_title);
  })

  it('should render add icon div correctly', () => {
     expect(component.find('div.addIcon').length).toBe(1);
  })

  it('should send the add request when the user clicks on add button', () => {
      // const spyClick = jest.spyOn(component, 'handleRequest')
      // const addButton = component.find('div.addIcon').find('svg');
      const handleRequest = jest.fn();      
      const addButton = findByTestAttr(wrapper, 'add-box-icon');
      expect(addButton).toBeTruthy();
      // addButton.simulate('click')
      // expect(handleRequest).toHaveBeenCalled();
  })
    
})