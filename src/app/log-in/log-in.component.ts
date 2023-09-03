import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  logInForm = new FormGroup({
    username: new FormControl(),
    password:  new FormControl()
});

  constructor(private logInService: LogInService){

  }

  getOneEmployee(){
    this.logInService.obj.username = this.logInForm.value.username;
    this.logInService.obj.password = this.logInForm.value.password;
    console.log(this.logInService.obj);
  }
}
