import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private service: UsersService) { }
  
  signUpForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(12)]),
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    address: new FormControl('', Validators.required),
    userType: new FormControl()
  })

  addUser(){
    const object = {
      nombre_usuario: this.signUpForm.value.username,
      clave: this.signUpForm.value.password, 
      email: this.signUpForm.value.email, 
      telefono: this.signUpForm.value.phoneNumber,
      nombre: this.signUpForm.value.firstName,
      apellido: this.signUpForm.value.lastName,
      direccion: this.signUpForm.value.address,
      tipo_usuario: 1
    }
    this.service.addUser(object).subscribe(() => this.signUpForm.reset())
  }
}
