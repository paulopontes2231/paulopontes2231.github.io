import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Player } from "../entities/player";


@Injectable({ providedIn: 'root' })
export class PlayerService {

    playersChanged = new Subject<Player[]>();
    responseData: any = ''

    baseURL = 'http://localhost:3000/player/'
    players: Player[] = [];

    constructor(
/*         private http: HttpClient,
 */        private _snackBar: MatSnackBar
    ) { }

    insertPlayer(player: any, text: any) {
      /*   this.http.post(this.baseURL, { player, text }, { observe: 'response', responseType: 'text' }).subscribe(res => {
            this.responseData = (res.body)
        }
        ) */
    }

    openSnackBar() {
        this._snackBar.open(this.responseData, 'OK', {
            duration: 4000
        });
    }


    getPlayers() {
/*         return this.http.get<Player[]>(this.baseURL)
 */    }

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