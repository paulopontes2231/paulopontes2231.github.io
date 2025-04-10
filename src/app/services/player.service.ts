import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Player } from "../entities/player";


@Injectable({ providedIn: 'root' })
export class PlayerService {

    playersChanged = new Subject<any>();
    responseData: any = ''
    playerList: any = []

    baseURL = 'http://localhost:3000/player/'
    players: Player[] = [];

    constructor(
        private http: HttpClient,
        private _snackBar: MatSnackBar
    ) { }

    postPlayerList(text: any) {
        return this.http.post(this.baseURL, {text:text}, { observe: 'response', responseType: 'json' })
    }

    getPlayerListDefault() {
        return this.http.get('assets/FMRATER2.csv', { observe: 'response', responseType: 'text' })
   }

    openSnackBar() {
        this._snackBar.open(this.responseData, 'OK', {
            duration: 4000
        });
    }


    getPlayers() {
        return this.http.get<Player[]>(this.baseURL)
    }

    refreshPlayersList() {
      /*   this.getPlayers().subscribe((res) => {
            this.players = res as Player[]
            this.playersChanged.next(this.players.slice())
        }) */
    }

    deletePlayer(uniqueID: any) {
/*         return this.http.delete(this.baseURL + `${uniqueID}`)
 */    }
}