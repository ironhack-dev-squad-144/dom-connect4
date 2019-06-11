let $grid = document.querySelector('.grid')


function generateGrid(width, height) {
  let grid = []
  for (let row = 0; row < height; row++) {
    grid.push(generateRow(width))
  }
  return grid
} 

function generateRow(width) {
  let row = []
  for (let col = 0; col < width; col++) {
    row.push("")
  }
  return row
}

function renderGrid() {
  let innerHTML = ""
  for (let row = 0; row < grid.length; row++) {
    innerHTML += `<div class="row">`
    for (let col = 0; col < grid[row].length; col++) {
      innerHTML += `<div class="square" data-row="${row}" data-col="${col}">
        <div class="${grid[row][col]}"></div>
      </div>`
    }
    innerHTML += `</div>`
  }
  $grid.innerHTML = innerHTML

  let $squares = document.querySelectorAll('.square')
  $squares.forEach($square => {
    $square.onclick = () => {
      let row = Number($square.getAttribute('data-row'))
      let col = Number($square.getAttribute('data-col'))
      console.log(`You clicked on a square at position ${col} and ${row}`)
      // Check if the grid is empty at [row][col]
      console.log(grid[row][col], row, grid.length-1)
      if (grid[row][col] === "" && (row === grid.length-1 || grid[row+1][col] !== "")) {
        grid[row][col] = turn
        if (turn === 'R') turn = 'Y'
        else turn = 'R'
        renderGrid()
      }
    }
  })
  
}

let grid = generateGrid(7, 6)
let turn = 'R'
renderGrid()
console.log(grid) 