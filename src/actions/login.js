import axios from 'axios'

import { setCurrentUser, unsetCurrentUser } from '@/actions/my/profile'

export const authEmailSignup = (values) => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'POST',
    url: `${process.env.API_DOMAIN}/api/controllers/auth/email/signup`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})

export const authEmailLogin = (values) => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'POST',
    url: `${process.env.API_DOMAIN}/api/controllers/auth/email/login`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})

export const authLogout = () => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'DELETE',
    url: `${process.env.API_DOMAIN}/api/controllers/auth/logout`,
    withCredentials: true
  }).then((resp) => {
    dispatch(unsetCurrentUser())
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})
