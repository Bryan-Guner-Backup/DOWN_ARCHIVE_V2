import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Connections from './Connections'
import findByTestAttr from '../../tests/utils'

const setUp = (props = {}) => {
  const wrapper = shallow(<Connections { ...props } />)
  return wrapper
}

describe('<Connections /> component testing', () => {
    const testProps = {
      sumConnections: 1
    }
    let component;
    beforeEach(() => {
      component = setUp({...testProps});
    });
    it('should match snapshot tests', () => {
        expect(toJSON(component)).toMatchSnapshot();
    })

    it('should render <Connections /> component correctly', () => {
        const connectionsWrapper = findByTestAttr(component, 'connections');
        expect(connectionsWrapper.length).toBe(1);
    });

    it('should render a second container <Div /> correctly', () => {
         const secondWrapper = findByTestAttr(component, 'second-wrapper');
         expect(secondWrapper.exists()).toBe(true);
    });
    it('should render <Paper /> component correctly', () => {
      const wrapper = findByTestAttr(component, 'paper');       
        expect(wrapper.exists()).toBe(true);
    });    
    
    it('should render mani title in the component', () => {
            const sum = testProps.sumConnections;
            const h1 = findByTestAttr(component, 'my-connections');
            expect(h1.length).toBe(1);
            expect(h1.text().trim()).toEqual(`My Connections (${sum})`);
    }); 
    
    it('should render <SwipeTabsConnections /> component correctly', () => {
         expect(component.find('SwipeTabsConnections').exists()).toBe(true);
    });        
});
