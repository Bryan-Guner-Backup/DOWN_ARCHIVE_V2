import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import PersonCard from './PersonCard'
import teamMembers from './TeamMembers'
import findByTestAttr from '../../tests/utils'

const setUp = (props = {}) => {
  const component = shallow(<PersonCard { ...props } />)
  return component
}

describe('<PersonCard /> component testing', () => {
  let component
  const testProps = {
    name: 'test-name',
    position: 'test-position'
  }
  beforeEach(() => {
    component = setUp(testProps)
  })

  it('should pass the snapshot test correctly', () => {
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render <PersonCard /> component with no errors', () => {
    expect(component.length).toBe(1)
  })

  it('should render PersonCard container', () => {
    const personContainer = findByTestAttr(component, 'person-container')
    expect(personContainer.length).toBe(1)
  })

  describe('PersonCard Image container', () => {
    let personCard
    beforeEach(() => {
      personCard = findByTestAttr(component, 'person-image-container')
    })
    it('should render PersonCard Image container', () => {
      personCard.forEach((div) => {
        expect(div.length).toBe(1)
      })
    })

    it('should render anchor tag for image link', () => {
      const a = component.find('a')
      expect(a.length).toBe(teamMembers.length)
    })

    it('should render <h2 /> correctly', () => {
      const header = component.find('h2')
      expect(header.exists()).toBe(true)
    })

    it('should render header content correctly', () => {
      personCard.forEach((div, index) => {
        expect(div.find('h2').text()).toEqual(teamMembers[index].name)
      })
    })

    it('should render <p/> correctly with its contents', () => {
      personCard.forEach((div, index) => {
        expect(div.find('p').text()).toEqual(teamMembers[index].position)
      })
    })
  })
})
