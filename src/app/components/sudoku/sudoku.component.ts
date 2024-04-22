import { Component } from '@angular/core';
import { SudokuService } from 'src/app/services/sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss'
})
export class SudokuComponent {

  sudokuGrid: any = [];
  sudokuGrid2: any[][] = [];
  allDisabled = false

  constructor(
    public sudokuService: SudokuService
  ) { }

  ngOnInit(): void {
    this.generateGrid();
  }

  generateGrid(): void {
    this.sudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
    this.sudokuGrid2 = Array.from({ length: 9 }, () => Array(9).fill(0));
  }

  onKeyDown(event: any, cell: any, i: any, j: any, value: any): void {
    const inputValue = Number(cell.value);
    const keyCode = event.keyCode;

    if (inputValue != 0 && keyCode != 8 /* keyCode == 8 is BACKSPACE so it allows the user to erase a number*/) {
      event.preventDefault()
    } else {
      if (parseInt(event.key) > 0 && parseInt(event.key) < 10) {
        this.sudokuGrid2[i][j] = parseInt(event.key)
      }
    }
  }

  clearAll() {
    this.generateGrid()
    this.allDisabled = false
  }

  solveSudoku() {
    this.sudokuGrid = this.sudokuGrid2
    for (let i = 0; i < this.sudokuGrid.length; i++) {
      for (let j = 0; j < this.sudokuGrid[i].length; j++) {
        if (this.sudokuGrid[i][j] != 0) {
          this.sudokuGrid[i][j] = { value: this.sudokuGrid[i][j], base: true }
        } else {
          this.sudokuGrid[i][j] = { value: this.sudokuGrid[i][j], base: false }
        }
      }
    }
    this.allDisabled = true
    this.sudokuService.postSudoku(this.sudokuGrid).subscribe(res => {
      if (res != null) {
        this.sudokuGrid = res.body
      }
    })
  }

}
