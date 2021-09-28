import toJSON from 'enzyme-to-json'
import { axiosWithAuth } from './axiosWithAuth'

describe('checking axiosWithAuth', () => {
  const mockedObj = { axiosWithAuth }
  let mockAxios
  beforeEach(() => {
    mockAxios = jest.spyOn(mockedObj, 'axiosWithAuth')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should pass snapshot testing', () => {
    expect(toJSON(axiosWithAuth)).toMatchSnapshot()
  })

  it('axiosWithAuth should be used', () => {
    mockedObj.axiosWithAuth()
    expect(mockAxios).toHaveBeenCalled()
  })
})
