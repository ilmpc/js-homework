const likeButtons = document.querySelectorAll('.like > .fa-heart')

likeButtons.forEach((button) => button.addEventListener('click', (event) => {
  event.target.classList.contains('liked')
}))
