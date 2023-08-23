import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP-dsw-front';
  isLogged:boolean = false;
  showLogForm:boolean = false;
  asignLogIn(){
    this.showLogForm = false;
    this.isLogged = true;
  }
  logUser(){
    this.showLogForm = true;
  }
}
