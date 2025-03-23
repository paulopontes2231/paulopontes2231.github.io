import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent {

  email = "paulopontes2231@gmail.com"

  isBlurred: boolean = true; // Initially blurred
  showBlur = "Remove Blur"

  toggleBlur() {
    this.isBlurred = !this.isBlurred; // Toggle blur effect
    if(!this.isBlurred){
      this.showBlur = "Add Blur"
    }
    if(this.isBlurred){
      this.showBlur = "Remove Blur"
    }
  }
}
