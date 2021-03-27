function getCellCoordinates (cell) {
  return [cell.cellIndex, cell.parentNode.rowIndex]
}

function getEmptyCell (table) {
  return table.querySelector('.table-active')
}

function isCellsExchangeable (cellA, cellB) {
  const [columnA, rowA] = getCellCoordinates(cellA)
  const [columnB, rowB] = getCellCoordinates(cellB)
  const diffColumn = Math.abs(columnA - columnB)
  const diffRow = Math.abs(rowA - rowB)

  return diffColumn + diffRow === 1
}

function exchangeNodes (nodeA, nodeB) {
  if (nodeA === nodeB) {
    return
  }
  ;[nodeA.innerText, nodeB.innerText] = [nodeB.innerText, nodeA.innerText]
  ;[nodeA.className, nodeB.className] = [nodeB.className, nodeA.className]
}

function isPuzzleSolved (table) {
  const cells = table.querySelectorAll('td')
  return Array
    .from(cells)
    .map((element) => +element.innerText)
    .filter((element) => element !== 0)
    .every((element, index) => element === index + 1)
}

function solvePuzzle (table) {
  const cells = table.querySelectorAll('td')
  cells.forEach((element, index) => {
    if (index !== 15) {
      element.innerText = index + 1
    } else {
      element.innerText = ''
    }
  })
}
function onPuzzleSolved (table, tableEvent) {
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
  if (isPuzzleSolved(table)) {
    onPuzzleSolved(table, this)
  }
}

const puzzleTable = document.getElementById('puzzle-table')

puzzleTable.addEventListener('click', movePuzzleHandler)

const solveButton = document.getElementById('solve-puzzle')

solveButton.addEventListener('click', ({ target: button }) => {
  button.classList.add('hidden')
  solvePuzzle(puzzleTable)
  onPuzzleSolved(puzzleTable, movePuzzleHandler)
})
