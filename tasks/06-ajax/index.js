function doAfter (target, afterWork) {
  return (...args) => {
    Object.apply(target, args)
    afterWork()
  }
}

function carry (target, ...args) {
  return (...remainArgs) => {
    Object.apply(target, [...args, ...remainArgs])
  } 
}

function suggestUsers (event) {
  // unhide list
  // add scroller
  // download data
  // remove scroller
  // display data
}

function displayUser (event) {
  // hide suggestList
  // read username
  // add loader
  // download data
  // remove loader
  // display data
}

function pickUserFromDropdown (event) {
  // insert name into search box
  displayUser(event)
}

const searchBox = document.getElementById('search-box')
const searchForm = document.getElementById('search-form')
const searchDropdown = document.getElementById('search-box-dropdown')

searchBox.addEventListener('input', suggestUsers)
searchForm.addEventListener('submit', displayUser)
searchDropdown.addEventListener('click', pickUserFromDropdown)
