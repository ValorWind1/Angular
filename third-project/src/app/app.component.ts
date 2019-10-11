import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// I need TestService
  constructor(private svc: TestService) {
    svc.printToConsole("Got the Service!")
  }
}
