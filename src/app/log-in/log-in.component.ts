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
    password: new FormControl()
  });


  constructor(private logInService: LogInService) {

  }




  getOneEmployee() {
    this.logInService.getOne(this.logInForm.value.username, this.logInForm.value.password);
    this.logInForm.reset();
  }
}
