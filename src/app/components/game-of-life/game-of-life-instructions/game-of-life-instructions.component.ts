import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InstructionsComponent } from '../../instructions/instructions.component';

@Component({
  selector: 'app-game-of-life-instructions',
  standalone: true,
  imports: [],
  templateUrl: './game-of-life-instructions.component.html',
  styleUrl: './game-of-life-instructions.component.scss'
})
export class GameOfLifeInstructionsComponent {
  
   constructor(
      public dialogRef: MatDialogRef<GameOfLifeInstructionsComponent>,
    ) { }


  close() {
    this.dialogRef.close()
  }
}
