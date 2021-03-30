import Downloaders from './downloaders.js'
import { getErrorTextFromRequest as getErrorTextFromGithubRequest, getAvatartURL as getGithubAvatarURL } from './githubFaces.js'

const loaderElement = document.querySelector('main > .loader')
const dataElement = document.querySelector('main > .data')
const photoElement = dataElement.querySelector('.data > img[alt=photo]')
const errorElement = document.querySelector('main > .error')
const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', onSubmitUserSearch)

// clear div
// nick, type
// animation
// request(type, nick)
// then(show user)
// catch(error)
// then(stop animation)
function onSubmitUserSearch (event) {
  event.preventDefault()

  const nick = event.target.elements.q.value
  const downloader = Downloaders[event.target.elements.type.value]

  if (nick) { return }

  ;[dataElement, errorElement].forEach(hide)
  unhide(loaderElement)

  getGithubAvatartURL(downloader, nick)
    .then((url) => putUrlInImgNode(url, photoElement))
    .then(() => unhide(dataElement))
    .catch((request) => {
      errorElement.innerHTML = getErrorTextFromGithubRequest(request, nick)
      unhide(errorElement)
    })
    .then(() => hide(loaderElement))
}

async function putUrlInImgNode (url, imgNode) {
  imgNode.setAttribute('src', url)
  return new Promise((resolve, reject) => {
    const whenLoad = imgNode.addEventListener('load', (event) => {
      imgNode.removeEventListener('load', whenLoad)
      resolve()
    })
  })
}

function hide (element) {
  element.classList.add('hidden')
}

function unhide (element) {
  element.classList.remove('hidden')
}
