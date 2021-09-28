import { userConstants } from '../actions/types'

import { axiosWithAuth } from '../components/utils/axiosWithAuth'

export const setUser = (user) => dispatch => {
    dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: user
    })
}

export const userLoginOrRegister = (oktaAuthState, oktaAuthService) => dispatch => {
    const accessToken = oktaAuthState.accessToken;
    localStorage.setItem("accessToken", accessToken);
    oktaAuthService.getUser().then(info => {
        axiosWithAuth()
            .post('users/email', {email: info.email})
            .then(res => {
                if(res.data.length > 0){
                    dispatch({
                        type: userConstants.LOGIN_SUCCESS,
                        payload: res.data[0]
                    })
                } else {
                    axiosWithAuth()
                        .post('users/', {
                            email: info.email,
                            given_name: info.given_name,
                            family_name: info.family_name
                        })
                        .then(res => {
                            axiosWithAuth()
                                .post('users/email', {email: info.email})
                                .then(response => {
                                    dispatch({
                                        type: userConstants.LOGIN_SUCCESS,
                                        payload: response.data[0]
                                    })
                                })
                                .catch(err => console.log(err))
                        })
                        .catch(err => console.log('error in user post', err))
                }
            })
            .catch(err => {
                console.log('error in user by email', err)
            })
    })
}