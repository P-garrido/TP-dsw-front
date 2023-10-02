import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements  OnInit {
  list: any = [];

  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormControl(),
    userType: new FormControl()
  })

  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.getAllUsers()
  }

  addUser(){
    const obj = {
      nombre_usuario: this.userForm.value.username,
      clave: this.userForm.value.password, 
      email: this.userForm.value.email, 
      telefono: this.userForm.value.phoneNumber,
      nombre: this.userForm.value.firstName,
      apellido: this.userForm.value.lastName,
      direccion: this.userForm.value.address,
      tipo_usuario: this.userForm.value.userType == 'Cliente' ? 1 : 0
    }
    this.service.addUser(obj).subscribe()
  }

  getAllUsers(): any{
    this.list = []
    this.service.getAllUsers().subscribe(response => this.list = response)
    console.log(this.list)
  }

  deleteUser(item: any): void{
    const userId = item.id_usuario
    console.log(userId)
    this.service.deleteUser(userId).subscribe(this.getAllUsers())
  }
}
