import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GameOfLifeInstructionsComponent } from './game-of-life-instructions/game-of-life-instructions.component';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrl: './game-of-life.component.scss'
})
export class GameOfLifeComponent implements OnInit {
  grid: number[][] = [];
  rows: number = 16;
  cols: number = 16;
  interval: any;
  running: boolean = false;
  noProgress: boolean = false;

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    this.initializeGrid();
  }

  initializeGrid(): void {
    this.randomize();
  }

  toggleCell(row: number, col: number): void {
    this.grid[row][col] = this.grid[row][col] === 0 ? 1 : 0;
  }

  nextGeneration(): void {
    const newGrid = this.grid.map(arr => [...arr]);

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const neighbors = this.countNeighbors(row, col);
        if (this.grid[row][col] === 1) {
          if (neighbors < 2 || neighbors > 3) newGrid[row][col] = 0;
        } else {
          if (neighbors === 3) newGrid[row][col] = 1;
        }
      }
    }
    const isSame = this.grid.every((row, i) =>
      row.every((cell, j) => cell === newGrid[i][j])
    );

    this.grid = newGrid;

    if (isSame) {
      this.noProgress = true;
      this.stopGame();
    }
  }

  countNeighbors(row: number, col: number): number {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const x = row + i;
        const y = col + j;
        if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
          count += this.grid[x][y];
        }
      }
    }
    return count;
  }

  startGame(): void {
    if (!this.running) {
      this.running = true;
      this.interval = setInterval(() => this.nextGeneration(), 500);
    }
  }

  stopGame(): void {
    this.running = false;
    clearInterval(this.interval);
    console.log("Game stopped");
  }

  clear(): void {
    this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
  }

  randomize(): void {
    if (this.running) {
      return
    }
    this.grid = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => Math.random() < 0.5 ? 0 : 1)
    );
  }

  openInstructions() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%'
    dialogConfig.minHeight = '700px'
    dialogConfig.autoFocus = false

    const dialogRef = this.dialog.open(GameOfLifeInstructionsComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}