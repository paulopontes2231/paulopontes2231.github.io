import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Level } from 'src/app/entities/iLevel';
import { JokerService } from 'src/app/services/joker.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.scss'
})
export class LevelsComponent implements OnInit{
  levels: Level[] = []
  private subscription!: Subscription;

  isDesktop = window.innerWidth > 690;

  constructor(public jokerService: JokerService) { }

  ngOnInit(): void {
    this.subscription = this.jokerService.levels.subscribe(levels => {
      if (levels) {
        this.levels = levels;
      }
    });
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth > 690;
  }

  findLastActive(): number {
    for (let i = 0; i < this.levels.length; i++) {
      if (this.levels[i].active == false) {
        return i - 1
      }

    }
    return 0;
  }


}
