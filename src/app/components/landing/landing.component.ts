import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [


    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('1000ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(":leave", [
        animate('1000ms ease-out', style({ transform: 'translateX(100%)' })),
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }), // Start off-screen to the left
        animate('1000ms ease-out', style({ transform: 'translateX(0)' })), // Animate to normal position
      ]),
      transition(':leave', [
        animate('1000ms ease-out', style({ transform: 'translateX(-100%)' })), // Animate back to the left
      ])
    ]),
    trigger('showState', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('2s', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class LandingComponent {

}
