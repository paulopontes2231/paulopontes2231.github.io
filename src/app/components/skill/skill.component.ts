import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/entities/ISkill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent {

  @Input() skill!: Skill


}
