export default function getFromURL (callback, errorCallback, url) {
  const request = new window.XMLHttpRequest()
  request.open('GET', url, true)
  request.onload = () => {
    if (request.status === 200) {
      callback(request.responseText)
    } else {
      errorCallback(request)
    }
  }
  request.send()
}
