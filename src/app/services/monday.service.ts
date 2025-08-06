import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Player } from "../entities/player";
import { environment } from "src/environments/environment";


@Injectable({ providedIn: 'root' })
export class MondayService {

    baseURL = `${environment.apiUrl}mondayScore`;

    constructor(
        private http: HttpClient,
    ) { }

    getHighscore() {
        return this.http.get(this.baseURL)
    }

    postHighscore(highscore) {
        return this.http.post(this.baseURL, highscore)
    }

}