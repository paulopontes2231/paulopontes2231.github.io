import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-lifelines',
  templateUrl: './lifelines.component.html',
  styleUrl: './lifelines.component.scss'
})
export class LifelinesComponent {
  lifelines = [false, true, true, true, true, true, true, true]

  isDesktop = window.innerWidth >= 650;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth >= 650;
  }

  activeLifelineCount(): number {
    return this.lifelines.filter(l => l).length;
  }
}
