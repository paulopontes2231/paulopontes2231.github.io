import { Component, OnInit } from '@angular/core';

declare var require: any
let DateGenerator = require('random-date-generator');

const DAYS_OF_THE_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

@Component({
  selector: 'app-is-it-monday',
  templateUrl: './is-it-monday.component.html',
  styleUrls: ['./is-it-monday.component.scss']
})

export class IsItMondayComponent implements OnInit {
  title = 'isItMonday';
  daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day: any;
  options: any;
  correctOption: any;
  correct: any
  counter = 0
  disabled = false;
  bonus = false;

  ngOnInit() {
    this.daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    this.correct = ""
    this.day = this.generateDate();

    this.options = this.generateOptions(this.day.getDay());

    this.correctOption = this.day.toDateString().substring(0, 3);
    this.day = (this.day.toString()).substring(4, 15)
  }

  generateOptions(index: any) {
    let tempArray = this.daysOfTheWeek
    let options: any = [];
    options.push(this.daysOfTheWeek[index]);
    tempArray.splice(index, 1);
    for (let i = 0; i < 3; i++) {
      let newIndex = Math.floor(Math.random() * tempArray.length);
      options.push(tempArray[newIndex]);
      tempArray.splice(newIndex, 1);
    }
    this.shuffle(options);
    return options;
  }

  shuffle(array: any) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  generateDate() {
    let startDate = new Date(2010, 1, 1);
    let endDate = new Date(2025, 1, 1);
    return DateGenerator.getRandomDateInRange(startDate, endDate); // random date in range
  }

  buttonClick(row: any) {
    this.disabled = true
    if (row.substring(0, 3) == this.correctOption) {
      this.correct = "Correct! It was " + this.findstartswith(DAYS_OF_THE_WEEK, this.correctOption) + "."
        this.counter++
        if(this.bonus == true){
          this.counter++
        }
    } else {
      this.correct = "Wrong! It was " + this.findstartswith(DAYS_OF_THE_WEEK, this.correctOption) + "."
        this.counter=0
        this.bonus = false
    }
    setTimeout(() => {
      this.ngOnInit()
      if(this.counter > 3){
        if(5 < Math.random()*10 && 6 >= Math.random()*10){
          this.bonus = true
        }else{
          this.bonus = false
        }
      }
      this.correct = ''
      this.disabled = false
    }, 2000);
  }


  findstartswith(inputlist: any, inputstring: any) {
    for (let i = 0; i < inputlist.length; i++) {
      if (inputlist[i].startsWith(inputstring)) {
        return inputlist[i];
      }
    }
  }

}