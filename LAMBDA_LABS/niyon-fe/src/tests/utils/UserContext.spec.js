import toJSON from 'enzyme-to-json'
import { UserContext } from '../../UserContext'

describe('UserContextAPI', () => {
  it('should record the pass snapshot testing', () => {
    expect(toJSON(UserContext)).toMatchSnapshot()
  })
})
