import { Component } from '@angular/core';
import { Skill } from 'src/app/entities/ISkill';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  skills: Skill[] = [
    new Skill('assets/icons/angular.png', 'Front-end', 'Angular, Typescript, React'),
    new Skill('assets/icons/java.png', 'Back-end', 'Java, SpringBoot, NodeJS, Typescript, Golang, SQL, MongoDB'),
    new Skill('assets/icons/sass.png', 'Style/Library', ' CSS, SCSS, Bootstrap , Material, Tailwind'),
    new Skill('assets/icons/git.png', 'Additional', 'Git, R, Python, Cypress, Jenkins, JUnit, Docker, ActiveMQ'),

  ];
}
