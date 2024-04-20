import { Component } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-player-dashboard-detail',
  templateUrl: './player-dashboard-detail.component.html',
  styleUrls: ['./player-dashboard-detail.component.scss']
})
export class PlayerDashboardDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if(this.data.scouting == null || this.data.scouting == ""){
      this.data.scouting = "---"
    }
    this.data.ratings.sort(function(a:{position: string, rating: number},b:{position: string, rating: number}) {
        return b.rating - a.rating
    });
  }
}
