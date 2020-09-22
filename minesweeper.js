document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)

// Define your `board` object here!
var board = {cells:[{row: 0, col: 0, isMine: true, hidden: true},{row: 1, col: 0, isMine: false, hidden: true},{row: 2, col: 0, isMine: false, hidden: true},{row: 3, col: 0, isMine: false, hidden: true},
                    {row: 0, col: 1, isMine: false, hidden: true},{row: 1, col: 1, isMine: false, hidden: true},{row: 2, col: 1, isMine: false, hidden: true},{row: 3, col: 1, isMine: false, hidden: true},
                    {row: 0, col: 2, isMine: false, hidden: true},{row: 1, col: 2, isMine: false, hidden: true},{row: 2, col: 2, isMine: false, hidden: true},{row: 3, col: 2, isMine: false, hidden: true},
                    {row: 0, col: 3, isMine: false, hidden: true},{row: 1, col: 3, isMine: false, hidden: true},{row: 2, col: 3, isMine: false, hidden: true},{row: 3, col: 3, isMine: false, hidden: true}

]}

function startGame () {
  // Don't remove this function call: it makes the game work!
  // add and populate the surroundingMines property

  lib.initBoard()
  




  for(i = 0; i < board.cells.length; i++) {
    
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i])
  }
}



// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  mines = board.cells.filter(cell => cell.isMine === true);
  nonMines = board.cells.filter(cell => cell.isMine === false);
  allMinesMarked = mines.every(cell => cell.isMarked === true);
  allNonMinesVisible = nonMines.every(cell => cell.hidden === false);
  console.log(allNonMinesVisible);


  if (allMinesMarked === true && allNonMinesVisible === true){
    lib.displayMessage('You win!')
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
function countSurroundingMines (cell) {
  surrounding = lib.getSurroundingCells(cell.row, cell.col)
  mineCount = 0

  surrounding.forEach(surCell => { 
    if (surCell.isMine === true){
      mineCount++;
    }
    
  });

  return mineCount;

}


