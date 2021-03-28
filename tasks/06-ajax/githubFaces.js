import getFromURL from './network.js'

function getGithubUser (callback, errorCallback, nick) {
  getFromURL(callback, errorCallback, `https://api.github.com/users/${nick}`)
}

export default function getAvatartURL (callback, errorCallback, nick) {
  getGithubUser((responseText) => {
    const userData = JSON.parse(responseText)
    const url = userData.avatar_url
    callback(url)
  }, errorCallback, nick)
}
