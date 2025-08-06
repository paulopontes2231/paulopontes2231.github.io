import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-highscore',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './highscore.component.html',
  styleUrl: './highscore.component.scss'
})
export class HighscoreComponent{
  disabled: boolean = true;
  username: string = '';
  

  constructor(
    public dialogRef: MatDialogRef<HighscoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) { }

  checkValue(value: string) {
    if (value.length > 0) {
      this.disabled = false
    }else{
      this.disabled = true
    }
  }

  close() {
    this.dialogRef.close()
  }

  save(username){
    //this.service.saveHighscore(username, this.data)
    console.log(username)
    this.dialogRef.close()
  }
}
