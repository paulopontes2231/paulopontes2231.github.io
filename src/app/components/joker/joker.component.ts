import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/entities/iQuestion';
import { JokerService } from 'src/app/services/joker.service';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrl: './joker.component.scss'
})
export class JokerComponent implements OnInit {

  question: Question = new Question("", "", [], "");
  decryptedAnswer: string = '';
  private subscription!: Subscription;
  counter: number = 0;

  constructor(private jokerService: JokerService) { }

  ngOnInit() {
    this.jokerService.getQuestion()
    this.subscription = this.jokerService.question.subscribe(data => {
      if (data) {
        this.question = data.question;
        this.decryptedAnswer = data.decryptedAnswer;
      }
    });
     this.subscription = this.jokerService.counter.subscribe(count => {
      this.counter = count
    });
  }

   increment() {
    this.jokerService.incrementCounter();
  }

  reset() {
    this.jokerService.resetCounter();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
