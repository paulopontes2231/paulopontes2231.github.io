import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-finish-game',
  standalone: true,
  imports: [],
  templateUrl: './finish-game.component.html',
  styleUrl: './finish-game.component.scss'
})
export class FinishGameComponent implements OnInit{

  highestPrize

  constructor(@Inject(MAT_DIALOG_DATA) public data: any)  {
  }

  ngOnInit(): void {
    this.getHighestPrize()
  }

  getHighestPrize() {
    for(let i = 0 ; i < this.data.source._value.length; i++){
      if(this.data.source._value[i].active == false){
        this.highestPrize = this.data.source._value[i-1].value
        console.log(this.highestPrize)
        return
      }
    }
  }
}
