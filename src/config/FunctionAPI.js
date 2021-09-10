import { MethodGet, MethodPost, MethodPostImage, MethodPut } from './Method'
import { cookiesGet } from './Cookies'
import { decrypt } from './Enkripsi/Enkripsi'

const token = decrypt(cookiesGet({ key: 'token' }))
const baseApi = process.env.REACT_APP_API


export const MakePost = async ({ url, data }) => {
  return await fetch(
    `${baseApi}${url}`,
    MethodPost({ token: token, data: data })
  )
    .then(res => res.json())
    .catch(e => {
      console.error('err : ', e)
      alert('error method')
    })
}

export const MakePut = async ({ url, data }) => {
  return await fetch(
    `${baseApi}${url}`,
    MethodPut({ token: token, data: data })
  )
    .then(res => res.json())
    .catch(e => {
      console.error('err : ', e)
      alert('error method')
    })
}

export const MakePostImage = async ({ url, data }) => {
  return await fetch(
    `${baseApi}${url}`,
    MethodPostImage({ token: token, data: data })
  )
    .then(response => response.json())
    .catch(e => {
      console.error('err : ', e)
      alert('error method')
    })
}

export const MakeGet = async function ({ url }) {
  return await fetch(
    `${baseApi}${url}`,
    MethodGet({ token: token })
  )
    .then(res => res.json())
    .catch(e => {
      console.error('err : ', e)
      alert('error method')
    })
}