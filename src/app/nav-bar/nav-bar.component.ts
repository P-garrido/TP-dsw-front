import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(public loginService: LogInService) {


  }



}
