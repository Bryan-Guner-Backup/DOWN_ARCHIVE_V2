import React from 'react';
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme'
import { render, fireEvent } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import UserProfile from './UserProfile'

import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

configure({ adapter: new Adapter() });

let wrapper;

beforeEach( () =>{
  wrapper = mount(<UserProfile />)
});

describe('User profile renders without crashing', () =>{
    it('renders without crashing', () =>{
        mount(<UserProfile />);
    });
  });
  

  it('Should render 7 <label>s', () =>{
    expect(wrapper.find('label')).toHaveLength(7)
  });

  it('Should render 1 <form>', () =>{
    expect(wrapper.find('form')).toHaveLength(1)
  });

  it('Should render 6 <input>s', () =>{
    expect(wrapper.find('input')).toHaveLength(6)
  });