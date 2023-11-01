import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';
import { LogInService } from '../log-in.service';
import { Router } from '@angular/router';
import { User } from '../models/classes';

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


  constructor(private logInService: LogInService, private router: Router) {

  }

  getOneEmployee() {
    this.logInService.getOne(this.logInForm.value.username, this.logInForm.value.password).subscribe(res => {
      if (res.token) {
        this.logInService.token = res.token;
        this.logInService.user = new User(res.user.id_usuario, res.user.nombre_usuario, res.user.clave, res.user.nombre, res.user.apellido, res.user.direccion, res.user.telefono, res.user.tipo_usuario, res.user.email);
        this.router.navigate(['/inicio']);
      }
    });
    this.logInForm.reset();

  }
}
