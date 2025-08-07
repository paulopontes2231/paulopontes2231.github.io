import { Component } from '@angular/core';
import { Option } from 'src/app/entities/iOption';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrl: './joker.component.scss'
})
export class JokerComponent {

  options: Option[] = [
        new Option("A"), new Option("B"), new Option("C"), new Option("D")      ];

}
