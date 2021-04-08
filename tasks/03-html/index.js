// import ShowMore module
const ShowMore = window.ShowMore

document.addEventListener('DOMContentLoaded', () => new ShowMore('.content', {}))

const likeBlocks = document.querySelectorAll('footer .like')

likeBlocks.forEach((block) => {
  const button = block.querySelector('.button')
  const amount = block.querySelector('.amount')
  button.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-heart')) {
      if (event.target.classList.contains('liked')) {
        event.target.classList.remove('liked')
        amount.innerText = +amount.innerText - 1
      } else {
        event.target.classList.add('liked')
        amount.innerText = +amount.innerText + 1
      }
    }
  })
})
