import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() logInClick:boolean = false;
  @Output() allowLogIn = new EventEmitter();

  logUser(){
    if(!this.logInClick){
      this.allowLogIn.emit();
    }
  }
}
