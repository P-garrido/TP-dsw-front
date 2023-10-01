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
  obj: any;
  constructor(private logInService: LogInService) {

  }
  @Output() loggedOk = new EventEmitter<boolean>();

  // logIn(){
  //   this.loggedOk.emit();
  // }
  // async 
  getOneEmployee() {
    // await this.logInService.getOne().then((data) => {return data.json()})
    //                                 .then((response) => this.obj = response);
    // if(this.obj){
    //   this.loggedOk.emit();
    //   console.log(this.obj)
    // }
    this.logInService.getOne('pedrocapo', 123456).subscribe(resp => {
      this.obj = resp;
      if (this.obj) {
        this.loggedOk.emit();
        console.log(this.obj)
      }
    })
  }
}
