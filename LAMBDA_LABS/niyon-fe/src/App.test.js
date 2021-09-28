import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from './App';
import  { UserContext } from './UserContext';
import findByTestAttr from './tests/utils/index';


describe('<App /> Component', () => {
     const user = {};
     const mode=false;
     const setMode = jest.fn()
     const setUser = jest.fn(); 
     const setUserSpy = jest.spyOn(React, 'useState');
     setUserSpy.mockImplementation((user) => [user, setUser]);
     let component;
     let useEffect;
     const mockUseEffect = () => {
          useEffect.mockImplementationOnce(() => setMode());
     };
     beforeEach(() => {
     useEffect = jest.spyOn(React, "useEffect");
     mockUseEffect(); // 2 times
     mockUseEffect(); //    
     component = shallow(        
            <UserContext.Provider value={{user, setUser}}>
              <App />
            </UserContext.Provider>       
          );      
     });
     
      it('should match the snapshot testing', () => {
           expect(toJSON(component)).toMatchSnapshot();
      })

     it('should render <App /> component correctly', () => {
           expect(component.exists()).toBe(true);
     });
     

     it('should render <Routes /> component correctly', () => {
          const wrapper = component.dive();          
          expect(wrapper.find('Routes').exists()).toBe(true);
     });    
});