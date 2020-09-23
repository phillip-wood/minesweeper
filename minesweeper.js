document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)

// Define your `board` object here!
var board = {cells:[]}
let size = 4;
let percentOfMines = .7;

function createBoard() {
//create board using loop and user selected size//
  for(i = 0; i < size; i++){
    
    for(x = 0; x < size; x++){
      board.cells.push({
        row: i,
        col: x,
        isMine: Math.random() >= percentOfMines,
        hidden: true
      })
    }
  }
}

function reset(){
  document.querySelector(".board").innerHTML = " ";
  board = {cells:[]}
  startGame()
}

function updateSize(value){
  size = value;
  console.log("size")
  reset()
}


function startGame () {
  // Don't remove this function call: it makes the game work!
  // add and populate the surroundingMines property
  createBoard();
  
  lib.initBoard()





  for(i = 0; i < board.cells.length; i++) {
    
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i])
  }
}



// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  mines = board.cells.filter(cell => cell.isMine === true);
  nonMines = board.cells.filter(cell => cell.isMine === false);
  allMinesMarked = mines.every(cell => cell.isMarked === true);
  allNonMinesVisible = nonMines.every(cell => cell.hidden === false);
  


  if (allMinesMarked === true && allNonMinesVisible === true){
    lib.displayMessage('WINNER!')
    playSound2()

    
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

function playSound2(){
  let audio2 = new Audio('clap.mp3');
  audio2.play();
 }
