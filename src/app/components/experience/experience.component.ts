import { Component } from '@angular/core';
import { Job } from 'src/app/entities/iJob';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  jobs: Job[] = [
    new Job('assets/icons/natixis.png', "Natixis in Portugal", "Intern Developer", 'Typescript, Angular, Node.js, MongoDB', "03/2021 - 07/2021"),
    new Job('assets/icons/natixis.png', "Natixis in Portugal", "Software Developer", 'Typescript, Angular, Node.js, Java, SpringBoot,MongoDB, SQL', "10/2021 - Present"),
  ];
}
