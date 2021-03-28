import getAvatartURL from './githubFaces.js'

const loaderElement = document.querySelector('main > .loader')
const dataElement = document.querySelector('main > .data')
const photoElement = dataElement.querySelector('.data > img[alt=photo]')
const errorElement = document.querySelector('main > .error')
const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', onSubmitUserSearch)

function onSubmitUserSearch (event) {
  event.preventDefault()
  ;[dataElement, errorElement].forEach(hide)
  unhide(loaderElement)

  const nick = event.target.elements['q'].value
  if (nick) {
    getAvatartURL(onSuccessfulGetUserAvatarURL, getHandlerErrorGetUserAvatarURL(nick), nick)
  } else {
    hide(loaderElement)
  }
}

function onSuccessfulGetUserAvatarURL (url) {
  photoElement.setAttribute('src', url)
  const whenLoad = photoElement.addEventListener('load', (event) => {
    unhide(dataElement)
    hide(loaderElement)
    photoElement.removeEventListener('load', whenLoad)
  })
}

function getHandlerErrorGetUserAvatarURL (nick) {
  return (request) => {
    if (request.status === 404) {
      errorElement.innerHTML = `User <strong>${nick}</strong> not found`
    } else {
      errorElement.innerText = JSON.parse(request.responseText).message
    }
    unhide(errorElement)
    hide(loaderElement)
  }
}

function hide (element) {
  element.classList.add('hidden')
}

function unhide (element) {
  element.classList.remove('hidden')
}
