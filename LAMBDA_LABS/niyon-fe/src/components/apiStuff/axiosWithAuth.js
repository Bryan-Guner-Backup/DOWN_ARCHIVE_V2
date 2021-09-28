import axios from 'axios'
import io from 'socket.io-client'

const token = localStorage.getItem('token')
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://niyon-app.herokuapp.com',
    headers: {
      authorization: token
    }
  })
}

const createSocket = () => {
  return axios.create({
    baseURL: 'https://niyon-be-chat.herokuapp.com'
    // headers: {
    //   authorization: token,
    // },
  })
}

export const socketIO = () => {
  return io.connect('https://niyon-be-chat.herokuapp.com')
}
export const getChatHistory = async (roomName) => {
  console.log('axios call>>>>', roomName)
  return await createSocket().get(`/chathistory?room_name=${roomName}`)
}

export const getProfile = (id) => {
  return axiosWithAuth().get(`/profile/${id}`)
}

export const saveProfile = (id, profile) => {
  return axiosWithAuth().post(`/profile/${id}`, profile)
}

export const searchProfile = () => {
  return axiosWithAuth().get('/profile')
}

export const logIn = (values) => {
  return axiosWithAuth().post('/auth/login', values)
}

export const registerUser = (userDetails) => {
  return axiosWithAuth().post('/auth/register', userDetails)
}

export const getNewsFeed = () => {
  return axiosWithAuth().get('/news')
}

export const getUserCard = (endPoint, id, payload) => {
  return axiosWithAuth().post(`/connection/${endPoint}/${id}`, payload)
}
