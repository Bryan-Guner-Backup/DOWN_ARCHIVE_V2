import { userConstants } from '../actions/types';
import userReducer from './userReducer';

describe('User Reducer', () => {

    it('should return default state', () => {
        const newState = userReducer(undefined, {})
        expect(newState).toEqual({});
    })

})