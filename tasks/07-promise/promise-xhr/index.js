/* global XMLHttpRequest */

class PromisedXHR {
  send (method, url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)

      xhr.onload = function () {
        resolve(this)
      }

      xhr.onerror = function () {
        reject(new Error('Network Error'))
      }

      xhr.send()
    })
  }
}

export default PromisedXHR
