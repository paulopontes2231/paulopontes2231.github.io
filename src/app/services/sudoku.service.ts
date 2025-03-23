import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Player } from "../entities/player";


@Injectable({ providedIn: 'root' })
export class SudokuService {

    baseURL = 'http://localhost:3000/sudoku'

    constructor(
        private http: HttpClient,
        private _snackBar: MatSnackBar
    ) { }

    solveSudoku(grid) {
        const emptyCell = this.findEmptyCell(grid);
        if (!emptyCell) {
            // No empty cell found, Sudoku is solved
            return true;
        }
        const [row, col] = emptyCell;
        for (let num = 1; num <= 9; num++) {
            if (this.isValidMove(grid, row, col, num)) {
                // Try placing the number in the cell
                grid[row][col] = num;
                // Recursively solve the rest of the grid
                if (this.solveSudoku(grid)) {
                    return true;
                }
                // If placing num didn't lead to a solution, backtrack
                grid[row][col] = 0;
            }
        }
        // No valid number found for this cell, backtrack
        return false;
    }

    findEmptyCell(grid) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] === 0) {
                    return [row, col];
                }
            }
        }
        // If no empty cell is found
        return null;
    }

    isValidMove(grid, row, col, num) {
        // Check if num is not already present in the row, column, or 3x3 subgrid
        return !this.usedInRow(grid, row, num) &&
            !this.usedInCol(grid, col, num) &&
            !this.usedInSubgrid(grid, row - row % 3, col - col % 3, num);
    }

    usedInRow(grid, row, num) {
        return grid[row].includes(num);
    }

    usedInCol(grid, col, num) {
        for (let i = 0; i < 9; i++) {
            if (grid[i][col] === num) {
                return true;
            }
        }
        return false;
    }

    usedInSubgrid(grid, startRow, startCol, num) {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (grid[row + startRow][col + startCol] === num) {
                    return true;
                }
            }
        }
        return false;
    }


    postSudoku(text: any) {
        let grid = text
        let newGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                newGrid[i][j] = grid[i][j].value
            }
        }
        this.solveSudoku(newGrid);
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j].base == false) {
                    grid[i][j].value = newGrid[i][j]
                }
            }
        }
        return grid
    }
}