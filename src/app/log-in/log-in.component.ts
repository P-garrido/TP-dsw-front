import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';
import { LogInService } from '../log-in.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

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

  visible: boolean = false;


  getOneEmployee() {
    this.logInService.getOne(this.logInForm.value.username, this.logInForm.value.password).subscribe(res => {
      if (res.token) {
        this.logInService.token = res.token;
        this.logInService.setUserData(new User(res.user.id_usuario, res.user.nombre_usuario, res.user.clave, res.user.nombre, res.user.apellido, res.user.direccion, res.user.telefono, res.user.tipo_usuario, res.user.email));
        this.router.navigate(['/inicio']);
      }
    });
    this.logInForm.reset();
  }




  togglePassword(pass: HTMLInputElement) {
    if (this.visible) {
      this.visible = false;
      //Aca se oculta la contra
      pass.type = "password";
    }
    else {
      this.visible = true;
      //Aca se muestra la contra
      pass.type = "text";
    }
  }
}
