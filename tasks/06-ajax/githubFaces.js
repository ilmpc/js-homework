import { getSome, oneToOne } from './network.js'

function getGithubUser (callback, nick) {
  getSome(callback, `https://api.github.com/users/${nick}`)
}

function addImgToDoc (url) {
  const node = document.getElementById('photos')
  node.innerHTML += `<img src=${url}>`
}

function getAvatartURL (jsonResponse) {
  const response = JSON.parse(jsonResponse)
  return response.avatar_url
}

const callback = (resp) => addImgToDoc(getAvatartURL(resp))
oneToOne(getGithubUser,
  { callback: callback, args: ['bebraw'] },
  { callback: callback, args: ['ilmpc'] },
  { callback: callback, args: ['fabpot'] },
  { callback: callback, args: ['andrew'] })
