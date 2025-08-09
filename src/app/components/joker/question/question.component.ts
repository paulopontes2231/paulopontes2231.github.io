import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/entities/iQuestion';
import { JokerService } from 'src/app/services/joker.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit{
  counter = 1; //tem de se ir buscar ao service
  private subscription!: Subscription;
  

  @Input() question!: String

  constructor(public jokerService: JokerService){}

  ngOnInit(): void {
     this.subscription = this.jokerService.counter.subscribe(count => {
      this.counter = count
    });
  }
}
