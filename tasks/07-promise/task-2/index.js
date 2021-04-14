import { prettyPrintJson } from 'https://cdn.jsdelivr.net/npm/pretty-print-json/+esm'
import downloaders from './downloaders.js'
import { fetchAuthorOfPost } from './services.js'

const loaderElement = document.querySelector('main > .loader')
const dataElement = document.querySelector('main > .data')
const codeElement = dataElement.querySelector('pre')
const errorElement = document.querySelector('main > .error')
const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', onSubmitFetch)

// clear div
// nick, type
// animation
// request(type, nick)
// then(show user)
// catch(error)
// then(stop animation)
function onSubmitFetch (event) {
  event.preventDefault()

  const postId = event.target.elements.q.value
  const downloader = downloaders[event.submitter.value]

  if (!postId) { return }

  ;[dataElement, errorElement].forEach(hide)
  unhide(loaderElement)

  fetchAuthorOfPost(downloader, postId)
    .then((user) => putJsonInElement(codeElement, user))
    .then(() => unhide(dataElement))
    .catch((request) => {
      console.error(request)
      errorElement.innerHTML = 'Упаль :c'
      unhide(errorElement)
    })
    .then(() => hide(loaderElement))
}

function hide (element) {
  element.classList.add('hidden')
}

function unhide (element) {
  element.classList.remove('hidden')
}

function putJsonInElement (element, data) {
  element.innerHTML = prettyPrintJson.toHtml(data)
}
