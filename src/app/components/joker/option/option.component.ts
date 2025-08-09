import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokerService } from 'src/app/services/joker.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent implements OnInit {

  @Input() option!: String
  decryptedAnswer: string = '';
  private subscription!: Subscription;

  constructor(public jokerService: JokerService) { }

  ngOnInit(): void {
    this.subscription = this.jokerService.question.subscribe(data => {
      if (data) {
        this.decryptedAnswer = data.decryptedAnswer;
      }
    });
  }

  click() {
    if (this.option === this.decryptedAnswer) {
      this.jokerService.nextQuestion("correct")
    } else {
      this.jokerService.nextQuestion("wrong")
    }

  }
}
