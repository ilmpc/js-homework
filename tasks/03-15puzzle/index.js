function getCellCoord (cell) {
  return [cell.cellIndex, cell.parentNode.rowIndex]
}

function getEmptyCell (table) {
  return table.querySelector('.table-active')
}

function isCellsExchangeable (left, right) {
  left = getCellCoord(left)
  right = getCellCoord(right)
  const isNear = (a, b) => a[0] === b[0] && Math.abs(a[1] - b[1]) === 1
  return isNear(left, right) || isNear(left.reverse(), right.reverse())
}

function exchangeNodes (left, right) {
  if (left === right) {
    return
  }
  const marker = document.createElement('div')
  left.parentNode.insertBefore(marker, left)
  right.parentNode.insertBefore(left, right)
  marker.parentNode.insertBefore(right, marker)
  marker.parentNode.removeChild(marker)
}

function isPuzzleCompleted (table) {
  const cells = table.querySelectorAll('td')
  return Array
    .from(cells)
    .map((el) => +el.innerText)
    .filter((el) => el !== 0)
    .every((el, i) => el === i + 1)
}

function solvePuzzle (table) {
  const cells = table.querySelectorAll('td')
  cells.forEach((el, i) => {
    if (i !== 15) {
      el.innerText = i + 1
    } else {
      el.innerText = ''
    }
  })
}
function reactOnPuzzleSolved (table, tableEvent) {
  getEmptyCell(table).classList.remove('table-active')
  document.getElementById('win-message').classList.remove('hidden')
  table.removeEventListener('click', tableEvent)
}

function movePuzzleHandler ({ target: cell, currentTarget: table }) {
  const emptyCell = getEmptyCell(table)
  if (!isCellsExchangeable(cell, emptyCell)) {
    return
  }
  exchangeNodes(cell, emptyCell)
  if (isPuzzleCompleted(table)) {
    reactOnPuzzleSolved(table, this)
  }
}

const puzzleTable = document.getElementById('puzzle-table')

puzzleTable.addEventListener('click', movePuzzleHandler)

const solveButton = document.getElementById('solve-puzzle')

solveButton.addEventListener('click', ({target: button}) => {
  button.classList.add('hidden')
  solvePuzzle(puzzleTable)
  reactOnPuzzleSolved(puzzleTable, movePuzzleHandler)
})
