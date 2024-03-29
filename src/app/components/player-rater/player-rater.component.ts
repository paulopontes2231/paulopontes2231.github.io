import { Component, OnInit } from '@angular/core';
import { InstructionsComponent } from '../instructions/instructions.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-player-rater',
  templateUrl: './player-rater.component.html',
  styleUrls: ['./player-rater.component.scss']
})
export class PlayerRaterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openInstructions(){
    let dialogRef = this.dialog.open(InstructionsComponent)
    
  }
}
