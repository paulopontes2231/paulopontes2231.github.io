import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {

  constructor(
    public dialogRef: MatDialogRef<InstructionsComponent>,
  ) {}

  close(){
    this.dialogRef.close()
  }
}
