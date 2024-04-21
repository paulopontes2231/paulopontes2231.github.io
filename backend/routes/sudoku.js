const express = require("express");
const router = express.Router();
const SudokuDomain = require("../domain/SudokuDomain")


router.post("/sudoku", (req, res) => {
  let grid = req.body.text
  let newGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      newGrid[i][j] = grid[i][j].value
    }
  }
  SudokuDomain.solveSudoku(newGrid);
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      if(grid[i][j].base == false){
        grid[i][j].value = newGrid[i][j]
      }
    }
  }
  res.send(grid)
});

module.exports = router;
