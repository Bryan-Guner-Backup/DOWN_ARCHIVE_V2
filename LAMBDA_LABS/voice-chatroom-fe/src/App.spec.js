import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

configure({ adapter: new Adapter() });

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe('App Renders Without Crashing', () =>{
  it('renders without crashing', () =>{
    shallow(<App />);
  });
});


