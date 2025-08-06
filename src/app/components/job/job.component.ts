import { Component, Input } from '@angular/core';
import { Job } from 'src/app/entities/iJob';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

    @Input() job!: Job
  

}
