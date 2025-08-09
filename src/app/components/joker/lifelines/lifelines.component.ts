import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokerService } from 'src/app/services/joker.service';

@Component({
  selector: 'app-lifelines',
  templateUrl: './lifelines.component.html',
  styleUrl: './lifelines.component.scss'
})
export class LifelinesComponent implements OnInit {
  lifelines = [true, true, true, true, true, true, true, true]
  private subscription!: Subscription;

  isDesktop = window.innerWidth > 690;

  constructor(public jokerService: JokerService){}

  ngOnInit(): void {
    this.subscription = this.jokerService.lifelines.subscribe(lifelines => {
      if (lifelines) {
        this.lifelines = lifelines;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth > 690;
  }

  activeLifelineCount(): number {
    return this.lifelines.filter(l => l).length;
  }
}
