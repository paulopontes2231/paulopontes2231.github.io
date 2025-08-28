import { Component } from '@angular/core';
import { Project } from 'src/app/entities/iProject';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.scss']
})
export class RecentProjectsComponent {

  projects: Project[] = [
      new Project('assets/icons/fmRater.png', "FM Player Rater", "An Angular and Golang app to rate Football Manager players objectively.", '#/playerRater', true),
      new Project('assets/icons/isItMonday.PNG', "Is it Monday?", "Angular mini-game which goal is to guess the day of the week of a given date.", '#/isItMonday', true),
      new Project('assets/icons/sudokuSolver.PNG', "Sudoku Solver", "An Angular and Golang app that solves Sudoku puzzles using a backtracking algorithm.", '#/sudoku-solver', true),
      new Project('assets/icons/gameOfLife.PNG', "Game of Life", "An Angular app that simulates the Game of Life, a cellular automaton.", '#/game-of-life', true),
      new Project('assets/icons/whatsAppBot.png', "WhatsApp Bot", "A Node.js app that sends a message at a specific time of day.\nNot available right now, only upon request.", '#/game-of-life', false),
      new Project('assets/icons/cdp24horas.PNG', "CDP 24 Horas", "An Angular and Node.js app which displays the results of a 24-hour tournament.", 'https://cdp24horas.eu', true),
      new Project('assets/icons/joker.png', "Joker", "An Angular and Golang app that recreates the popular portuguese TV show. Beta version - Still needs to be polished.", '#/joker', true),
    ];

}
