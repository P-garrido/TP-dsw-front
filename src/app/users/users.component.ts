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
  showClientsFlag: boolean = false;
  showEmployeesFlag: boolean = false;
  editId: number = 0;
  userType: number = 0;

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zñÑA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zñÑA-Z0-9-]+)*$")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(12)]),
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zñÑA-Z ]*$")], ),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zñÑA-Z ]*$")] ),
    address: new FormControl('', [Validators.required]),
    userType: new FormControl('')
  })

  constructor(private service: UsersService) {} 

  ngOnInit(): void {
    if(this.showEmployeesFlag){
      this.getAllEmployees()
    }
    else if (this.showClientsFlag){
      this.getAllClients()
    }
    else{
      this.getAllUsers()
    }
  }

  showOnlyEmployees(){
    this.showClientsFlag = false
    if(!this.showEmployeesFlag){
      this.showEmployeesFlag = true
    }
    else{
      this.showEmployeesFlag = false
    }
    this.ngOnInit()
  }

  showOnlyClients(){
    this.showEmployeesFlag = false
    if(!this.showClientsFlag){
      this.showClientsFlag = true
    }
    else{
      this.showClientsFlag = false
    }
    this.ngOnInit()
  }

  allowEditing(item: User){
    this.edit = true
    this.userForm.patchValue({username: item.userName, password: item.password, 
      email: item.email, phoneNumber: item.phone, firstName: item.firstName, lastName: item.lastName,
      address: item.adress, userType: item.type == 1? 'Empleado' : 'Cliente'  }) 
    this.editId = item.idUser
  }

  editUser(){
    const object = {
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
    this.service.editUser(object, this.editId).subscribe()
    this.userForm.reset()
    this.edit = false
    window.location.reload()
  }

  addUser(){
    const object: Object = {
      nombre_usuario: this.userForm.value.username,
      clave: this.userForm.value.password, 
      email: this.userForm.value.email, 
      telefono: this.userForm.value.phoneNumber,
      nombre: this.userForm.value.firstName,
      apellido: this.userForm.value.lastName,
      direccion: this.userForm.value.address,
      tipo_usuario: this.userType 
    }
    this.service.addUser(object).subscribe(() => this.userForm.reset())
    this.add = false
    window.location.reload()
  }

  getAllUsers(): void{
    this.list = []
    this.service.getAllUsers().subscribe((users: User[])=> {
      users.forEach((user: any) => {
        const object = new User(user.id_usuario, user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(object)
      })
    })
  }

  deleteUser(item: User): void{
    const userId = item.idUser
    this.service.deleteUser(userId).subscribe(() => this.ngOnInit())
  }

  getAllClients(){
    this.list = []
    this.service.getAllUsers().subscribe((allUsers: User[])=> {
      allUsers.forEach((user: any) => {
        const obj = new User(user.id_usuario, user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(obj)
        console.log(obj.type)
      })
      this.list = this.list.filter(user => user.type === 0)
    })
  }

  getAllEmployees(){
    this.list = []
    this.service.getAllUsers().subscribe((allUsers: User[])=> {
      allUsers.forEach((user: any) => {
        const object= new User(user.id_usuario,user.nombre_usuario, user.clave, user.nombre, user.apellido, user.direccion, user.telefono, user.tipo_usuario, user.email)
        this.list.push(object)
      })
      this.list = this.list.filter(user => user.type === 1)
    })
  }

  cleanForm(){
    this.userForm.patchValue({username: '', password: '', 
      email: '', phoneNumber: '', firstName: '', lastName: '',
      address: '', userType: ''})
  }
}
