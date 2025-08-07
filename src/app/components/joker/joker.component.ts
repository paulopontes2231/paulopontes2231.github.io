import { Component } from '@angular/core';
import { Option } from 'src/app/entities/iOption';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrl: './joker.component.scss'
})
export class JokerComponent {

  counter = 1 //tem de ser is buscar ao serviço
  options: Option[] = [
        new Option("Cabeça de Vento"), new Option("Espalha Brasas"), new Option("Carapau de Corrida"), new Option("Barata Tonta")      ];

}
