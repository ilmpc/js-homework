export function oneToOne (f, ...args) {
  if (args.length === 0) {
    return
  }
  function decorate (callback) {
    return (...callbackArgs) => {
      callback(...callbackArgs)
      oneToOne(f, ...args.slice(1))
    }
  }
  f(decorate(args[0].callback), ...args[0].args)
}

export function getSome (callback, url) {
  const request = new document.XMLHttpRequest()
  request.open('GET', url, true)
  request.onload = () => {
    if (request.status === 200) {
      callback(request.responseText)
    } else {
      console.error(request.status)
      console.error(request.statusText)
      console.error(request.responseText)
    }
  }
  request.send()
}

export function postSome (callback, url, body) {
  const request = new document.XMLHttpRequest()
  request.open('POST', url, true)
  request.onload = () => {
    if (request.status === 200) {
      callback(request.responseText)
    } else {
      console.error(request.status)
      console.error(request.statusText)
      console.error(request.responseText)
    }
  }
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
  request.send(JSON.stringify(body))
}
