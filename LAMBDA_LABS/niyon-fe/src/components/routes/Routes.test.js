import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import Routes from './Routes'

describe('<Routes />', () => {
  let component
  beforeEach(() => {
    component = shallow(<Routes />)
  })

  it('should pass snapshot testing', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

});
