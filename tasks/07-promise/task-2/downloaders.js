/* global axios, fetch */
import PromisedXHR from '../promise-xhr/index.js'

async function xhrDownloader (url) {
  const xhr = new PromisedXHR()
  return new Promise((resolve, reject) => {
    xhr.send('GET', url)
      .then((request) => {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText))
        } else {
          reject(request)
        }
      })
      .catch(console.error)
  })
}

async function fetchDownloader (url) {
  const request = fetch(url)
  return new Promise((resolve, reject) => {
    request
      .then((response) => {
        if (response.status === 200) {
          resolve(response.json())
        } else {
          reject(response)
        }
      })
      .catch(console.error)
  }
  )
}

async function axiosDownloader (url) {
  const request = axios.get(url)
  return new Promise((resolve, reject) => {
    request
      .then((response) => {
        resolve(response.data)
      })
      .catch(({ response }) => {
        response.text = () => response.data
        reject(response)
      })
  }
  )
}

export default {
  xhr: xhrDownloader,
  fetch: fetchDownloader,
  axios: axiosDownloader
}
