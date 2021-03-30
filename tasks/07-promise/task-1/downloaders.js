import PromisedXHR from '../promise-xhr/index.js'

async function xhrDownloader (url) {
  const xhr = new PromisedXHR()
  return new Promise((resolve, reject) => {
    xhr.send('GET', url)
      .then((request) => {
        if (request.ok) {
          resolve(request.responseText)
        } else {
          reject(request)
        }
      })
      .catch()
  })
}

async function fetchDownloader (url) {

}

async function axiosDownloader (url) {

}

export default {
  xhr: xhrDownloader,
  fetch: fetchDownloader,
  axios: axiosDownloader
}
