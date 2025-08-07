import { Component, Input } from '@angular/core';
import { Option } from 'src/app/entities/iOption';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent {

  @Input() option!: Option
}
