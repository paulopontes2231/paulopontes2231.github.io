import { Component, Input } from '@angular/core';
import { Project } from 'src/app/entities/iProject';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() project!: Project

}
