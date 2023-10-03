import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements  OnInit {
  list: any = [];
  edit: boolean = false;
  editId: number = 0;
  add: boolean = false;
  userType: number = 0;
  clients: boolean = false;
  employees: boolean = false; //banderas para filtrar por empleados o clientes

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(12)]),
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")], ),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")] ),
    address: new FormControl('', [Validators.required]),
    userType: new FormControl('')
  })

  constructor(private service: UsersService) {} 

  ngOnInit(): void {
    this.getAllUsers()
  }

  allowEditing(item: any){
    this.edit = true
    console.log(item.nombre_usuario)
    this.userForm.patchValue({username: item.nombre_usuario, password: item.clave, 
      email: item.email, phoneNumber: item.telefono, firstName: item.nombre, lastName: item.apellido,
      address: item.direccion, userType: item.tipo_usuario == 1? 'Cliente' : 'Empleado'  }) 
    this.editId = item.id_usuario
    //this.userForm.value.username = user.nombre_usuario
  }

  editUser(){
    const obj = {
      id_usuario: this.editId,
      nombre_usuario: this.userForm.value.username,
      clave: this.userForm.value.password, 
      email: this.userForm.value.email, 
      telefono: this.userForm.value.phoneNumber,
      nombre: this.userForm.value.firstName,
      apellido: this.userForm.value.lastName,
      direccion: this.userForm.value.address,
      tipo_usuario: 1 //este numero corresponde a cliente, un empleado deberia ser registrado desde el componente users
    }
    this.service.editUser(obj, this.editId).subscribe()
    this.userForm.reset()
    this.edit = false
    window.location.reload()
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
      tipo_usuario: this.userType //este numero corresponde a cliente, un empleado deberia ser registrado desde el componente users
    }
    this.service.addUser(obj).subscribe(() => this.userForm.reset())
    this.add = false
    window.location.reload()
  }

  getAllUsers(): any{
    this.list = []
    this.service.getAllUsers().subscribe(response => this.list = response)
    console.log(this.list)
  }

  deleteUser(item: any): void{
    const userId = item.id_usuario
    console.log(userId)
    this.service.deleteUser(userId).subscribe()
    //this.getAllUsers()
    window.location.reload();
  }
}
