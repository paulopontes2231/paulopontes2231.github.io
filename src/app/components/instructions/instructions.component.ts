import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Player } from 'src/app/entities/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {

  disabled: any

  constructor(
    public dialogRef: MatDialogRef<InstructionsComponent>,
    public playerService: PlayerService
  ) { }

  close() {
    this.dialogRef.close()
  }

  importDefault() {
    console.log("TESTE")
    this.playerService.getPlayerListDefault().subscribe(res => {
      this.playerService.postPlayerList(res.body).subscribe(res => {
        this.playerService.playerList = res.body
        this.disabled = true
      })
    }
    )
  }
}
