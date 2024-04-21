import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Player } from "../entities/player";


@Injectable({ providedIn: 'root' })
export class SudokuService {

    baseURL = 'http://localhost:3000/sudoku'
  
   /* sudokuGrid = [
        [{ value: 5, base: true }, { value: 3, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 7, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }],
        [{ value: 6, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 1, base: true }, { value: 9, base: true }, { value: 5, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }],
        [{ value: 0, base: false }, { value: 9, base: true }, { value: 8, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 6, base: true }, { value: 0, base: false }],
        [{ value: 8, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 6, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 3, base: true }],
        [{ value: 4, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 8, base: true }, { value: 0, base: false }, { value: 3, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 1, base: true }],
        [{ value: 7, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 2, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 6, base: true }],
        [{ value: 0, base: false }, { value: 6, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 2, base: true }, { value: 8, base: true }, { value: 0, base: false }],
        [{ value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 4, base: true }, { value: 1, base: true }, { value: 9, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 5, base: true }],
        [{ value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 0, base: false }, { value: 8, base: true }, { value: 0, base: false }, { value: 0, base: false }, { value: 7, base: true }, { value: 9, base: true }]
      ] */
      


    constructor(
        private http: HttpClient,
        private _snackBar: MatSnackBar
    ) { }


    postSudoku(text: any) {
        return this.http.post(this.baseURL, { text:  text}, { observe: 'response', responseType: 'json' })
    }
}