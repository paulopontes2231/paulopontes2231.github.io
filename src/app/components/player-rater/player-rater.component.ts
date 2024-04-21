import { Component, OnInit } from '@angular/core';
import { InstructionsComponent } from '../instructions/instructions.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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
    const dialogConfig= new MatDialogConfig();
    dialogConfig.width = '80%'
    dialogConfig.minHeight = '700px'
    dialogConfig.autoFocus = false
    
    const dialogRef = this.dialog.open(InstructionsComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
