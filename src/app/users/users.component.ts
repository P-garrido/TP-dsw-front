import { Component, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/classes';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements  OnInit {
  list: User[] = [];
  edit: boolean = false;
  add: boolean = false;
  clients: boolean = false;
  employees: boolean = false;
  editId: number = 0;
  userType: number = 0;

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
    if(this.employees){
      this.getAllEmployees()
    }
    else if (this.clients){
      this.getAllClients()
    }
    else{
      this.getAllUsers()
    }
  }

  showOnlyEmployees(){
    this.clients = false
    if(!this.employees){
      this.employees = true
    }
    else{
      this.employees = false
    }
    this.ngOnInit()
  }

  showOnlyClients(){
    this.employees = false
    if(!this.clients){
      this.clients = true
    }
    else{
      this.clients = false
    }
    this.ngOnInit()
  }

  allowEditing(item: User){
    this.edit = true
    console.log(item)
    this.userForm.patchValue({username: item.userName, password: item.password, 
      email: item.email, phoneNumber: item.phone, firstName: item.firstName, lastName: item.lastName,
      address: item.adress, userType: item.type == 1? 'Empleado' : 'Cliente'  }) 
    this.editId = item.idUser
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
      tipo_usuario: 0 //este numero corresponde a cliente, un empleado deberia ser registrado desde el componente users
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
      tipo_usuario: this.userType 
    }
    this.service.addUser(obj).subscribe(() => this.userForm.reset())
    this.add = false
    window.location.reload()
  }

  getAllUsers(): any{
    this.list = []
    this.service.getAllUsers().subscribe((resp: any)=> {
      resp.forEach((user: any) => {
        const obj = new User(user.id_usuario, user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(obj)
      })
    })
  }

  deleteUser(item: any): void{
    const userId = item.idUser
    this.service.deleteUser(userId).subscribe(() => this.ngOnInit())
  }

  getAllClients(){
    this.list = []
    this.service.getAllUsers().subscribe((resp: any)=> {
      resp.forEach((user: any) => {
        const obj = new User(user.id_usuario, user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(obj)
        console.log(obj.type)
      })
      this.list = this.list.filter(user => user.type === 1)
    })
  }

  getAllEmployees(){
    this.list = []
    this.service.getAllUsers().subscribe((resp: any)=> {
      resp.forEach((user: any) => {
        const obj = new User(user.id_usuario,user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(obj)
        console.log(obj.type)
      })
      this.list = this.list.filter(user => user.type === 0)
    })
  }

  cleanForm(){
    this.userForm.patchValue({username: '', password: '', 
      email: '', phoneNumber: '', firstName: '', lastName: '',
      address: '', userType: ''})
  }
}
