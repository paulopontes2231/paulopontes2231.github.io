import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MondayService } from 'src/app/services/monday.service';

@Component({
  selector: 'app-highscore',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './highscore.component.html',
  styleUrl: './highscore.component.scss'
})
export class HighscoreComponent {
  disabled: boolean = true;
  username: string = '';


  constructor(
    public dialogRef: MatDialogRef<HighscoreComponent>,
    public mondayService: MondayService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar

  ) { }

  checkValue(value: string) {
    if (value.length > 0) {
      this.disabled = false
    } else {
      this.disabled = true
    }
  }

  close() {
    this.dialogRef.close()
  }

  save(username) {
    let highscore = { "highScore": this.data, "highScorer": username }
    this.mondayService.postHighscore(highscore).subscribe(res => {
      this.snackBar.open("New highscore saved!", 'Close', {
        duration: 3000,  // milliseconds
        panelClass: ['centered-snackbar', 'error-snackbar']  // optional CSS class for styling
      });
    })
    this.dialogRef.close()
  }
}
