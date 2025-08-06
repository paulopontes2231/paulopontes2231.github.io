import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  baseURL = `${environment.apiUrl}visit`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.checkAndSendRequest();
  }
  private checkAndSendRequest(): void {
    const today = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD
    const lastVisit = localStorage.getItem('lastHomeVisitDate');

    if (lastVisit !== today) {
      this.http.post(this.baseURL, {}).subscribe({
        next: (response) => console.log('Request sent successfully:', response),
        error: (error) => console.error('Error sending request:', error)
      });
      localStorage.setItem('lastHomeVisitDate', today);
    }
  }

}
