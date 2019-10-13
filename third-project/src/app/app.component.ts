import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// I need TestService
  constructor(private svc: TestService, private http: HttpClient) {
    svc.printToConsole("Got the Service!")
  }
  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/valorwind1')

    obs.subscribe((response)=> console.log(response))
  }

}
