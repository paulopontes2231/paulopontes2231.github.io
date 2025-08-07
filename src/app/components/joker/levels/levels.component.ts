import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.scss'
})
export class LevelsComponent {
  levels = [{value:250, active: true}, {value:500, active: true}, {value:1000, active: true},
     {value:2000, active: true}, {value:5000, active: false}, {value:10000, active: false}, {value:25000, active: false}, {value:50000, active: false}]

  isDesktop = window.innerWidth >= 650;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth >= 650;
  }

  findLastActive() : number{
    for(let i = 0; i < this.levels.length; i++){
      if(this.levels[i].active == false){
        return i-1
      }
      
    }
    return 0;
  }

 
}
